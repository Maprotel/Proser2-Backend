import * as pool from "../../../../connectors/pool";
import { removeRowDataPacket } from "../../../helpers/mysql-helper.js";
import { writeDestiny, readOriginAllRecords } from "./extract-functions-inv";
import moment from "moment";

// CONSTANTS
const originTable = "call_center.agent";
const destinyTable = "InvAgent";
let incoming_date = process.argv[2];

/******************* Running actual program -- exec*/
async function extractInvAgentPlan(start_date) {

  start_date = start_date ? start_date : moment().format('YYYY-MM-DD');

  // Console notification
  console.log(`/*************/ Extracting ${destinyTable} /*************/ `);
  console.log("start_date", start_date);

  // Read origin data
  let records = await readPlannedAgents(start_date).catch(err =>
    console.log(`${destinyTable} caught it - readOriginAllRecords`, err)
  );

  console.log("records", records.length);

  // Transform data to import
  if (Array.isArray(records) && records.length > 0) {
    let extendedResult = records
      .map(x => {
        x.inv_agent_id = x.id;
        x.inv_agent_type = x.type;
        x.inv_agent_extension = x.number;
        x.inv_agent_name = x.name;
        x.inv_agent_status = x.estatus;

        return x;
      })
      .map(y => {
        delete y.id;
        delete y.type;
        delete y.number;
        delete y.name;
        delete y.password;
        delete y.estatus;
        delete y.eccp_password;

        return y;
      });

    // Write process data to destiny
    let validation =
      Array.isArray(extendedResult) && extendedResult.length > 0 ? true : false;

    if (validation) {
      try {
        let written = await writeDestiny(extendedResult, destinyTable).catch(
          err => console.log("extractInvAgentPlan caught it - writeDestiny", err)
        );

        return { function: "extractInvAgentPlan ", result: written };
      } catch (error) {
        console.log("error", error);
        return { error: error };
      }
    }
  }
}

/************************************************************************ */



// Read actual records
async function readPlannedAgents(date) {
  let result = null;

  let querySQL = `
  SELECT
  CONCAT(${date},'-', inv_agent_id) as agent_plan_id
  , inv_agent_name as agent_plan_agent_name
  , inv_agent_id as agent_plan_agent_id
  , ${date} as agent_plan_date
  , inv_scheduleday_start_time as agent_plan_start_time
  , inv_scheduleday_end_time as agent_plan_end_time
  , 'regular' as agent_plan_agent_type
  , WEEKDAY(${date}) + 1 as agent_plan_day_of_week
  , JSON_EXTRACT(inv_agent_time_json, '$.schedule.id' )  as agent_plan_schedule_id
  , JSON_UNQUOTE(JSON_EXTRACT(inv_agent_time_json, '$.schedule.name' ))  as agent_plan_schedule_name
  FROM
  InvAgent

  LEFT OUTER JOIN InvScheduleDay as scheduleday
  ON 
  JSON_EXTRACT(inv_agent_time_json, '$.schedule.id' ) = inv_schedule_id 
  AND 
  WEEKDAY(${date}) + 1 = inv_scheduleday_weekday

  WHERE
  inv_agent_status = 'A'
  `;

  try {
    result = await pool.origin.query(querySQL);
  } catch (error) {
    result = { error: error };
  }

  return result;
}


/************************************************************************ */

// npx babel-node src/sync/etl/extract/inv/extract-all-inv.js
// extractInvAgentPlan();

module.exports = {
  extractInvAgentPlan
};
