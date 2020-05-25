import * as pool from "../../../../connectors/pool";
import { removeRowDataPacket } from "../../../helpers/mysql-helper.js";
import {
  writeDestiny,
  previousDate,
  nextDate,
  minDate,
  startDate,
  deleteWriteDestiny,
  deleteDestiny
} from "./extract-functions-real";
import moment from "moment";
import { start } from "repl";

const destinyTable = "RealCurrentCalls";
const destinyDateField = "rca_break_datetime_init";
const destinyNumberField = "rca_logged_id";

const originTable = "call_center.call_entry";
const originDateField = "datetime_init";
const originNumberField = "id";

let first_pass = true;
let incoming_date = process.argv[2];

/******************* Running actual program -- exec*/
async function extractRealCalls(start_date) {
  let result = null;

  start_date = start_date ? start_date : moment().format("YYYY-MM-DD");
  console.log(`/*************/ Extracting ${destinyTable} /*************/ `);
  console.log("start_date", start_date);

  let preresult = await readOrigin(
    start_date,
    originTable,
    originDateField
  ).catch(err => console.log(`${destinyTable} caught it - readOrigin`, err));

  console.log("records", preresult.length);

  // let erased = await deleteOtherDates(
  //   start_date,
  //   originTable,
  //   originDateField
  // ).catch(err =>
  //   console.log(`${destinyTable} caught it - deleteOtherDates`, err)
  // );

  result = removeRowDataPacket(preresult);
  
  try {
    let written;
    let msg = "";
    let validation = "";
    let extendedResult = "";

    if (Array.isArray(result) && result.length > 0) {
      extendedResult = result;
      // console.log(extendedResult, "extendedResult");
      written;
      msg = "extractRealCalls end";
      validation = extendedResult[0] ? true : false;

      validation === true
        ? (written = await deleteWriteDestiny(
          extendedResult,
          destinyTable
        ).catch(err =>
          console.log("extractRealCalls caught it - deleteWriteDestiny", err)
        ))
        : (msg = `No hay registros nuevos por actualizar en ${destinyTable}`);
    } else {
      await deleteDestiny(destinyTable);
    }
    return msg;
  } catch (e) {
    console.log("e", e);
    return e;
  }
}

// Read actual records
async function deleteOtherDates(start_date, destinyTable, destinyDateField) {
  let today = moment().format("YYYY-MM-DD");

  return new Promise((resolve, reject) => {
    let querySQL = `
    DELETE FROM RealCurrentCalls WHERE rcc_date <> '${start_date}';
    DELETE FROM RealCurrentCalls WHERE rcc_callentry_datetime_end is not null;

    `;
    resolve(pool.destinyReports.query(querySQL));
    reject(`Error`);
  });
}

// Read actual records
async function readOrigin(start_date, table, datefield) {
  let next_date = nextDate(start_date);
  return new Promise((resolve, reject) => {
    let querySQL = `
   SELECT
    current_call_entry.id_call_entry as rcc_callentry_id
    ,current_call_entry.id_agent as rcc_callentry_agent_id
    ,current_call_entry.id_queue_call_entry as rcc_callentry_queue_id
    ,call_entry.id_contact as rcc_callentry_contact_id
    ,current_call_entry.callerid as rcc_callentry_callerid
    ,DATE_FORMAT(current_call_entry.datetime_init,'%Y-%m-%d %H:%i:%s') as rcc_callentry_datetime_init
    ,DATE_FORMAT(call_entry.datetime_end,'%Y-%m-%d %H:%i:%s') as rcc_callentry_datetime_end
    ,call_entry.duration as rcc_callentry_duration_sec
    ,call_entry.status as rcc_callentry_status
    ,call_entry.transfer as rcc_callentry_transfer
    ,DATE_FORMAT(call_entry.datetime_entry_queue,'%Y-%m-%d %H:%i:%s') as rcc_callentry_datetime_entry_queue
    ,call_entry.duration_wait as rcc_callentry_duration_wait_sec
    ,current_call_entry.uniqueid as rcc_callentry_uniqueid
    ,call_entry.id_campaign as rcc_callentry_campaign_id
    ,call_entry.trunk as rcc_callentry_trunk
    ,DATE_FORMAT(current_call_entry.datetime_init,'%Y-%m-%d %H:%i:%s') as rcc_date


    FROM call_center.current_call_entry as current_call_entry
    LEFT OUTER JOIN call_center.call_entry as call_entry
    ON id_call_entry = call_entry.id

    `;
    resolve(pool.origin.query(querySQL));
    reject(`Error`);
  });
}

/************************************************************************ */

// npx babel-node src/sync/etl/extract/real/extract_real_calls.js
// extractRealCalls(incoming_date);

module.exports = {
  extractRealCalls
};
