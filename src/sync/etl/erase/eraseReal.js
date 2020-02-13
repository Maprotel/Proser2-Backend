import * as pool from "../../../connectors/pool";
import { removeRowDataPacket } from "../../helpers/mysql-helper.js";
import moment from "moment";

// Read actual records
async function eraseRealData() {
  let result = null;

  let querySQL = `

  DELETE FROM RealCurrentAgents;
  DELETE FROM RealCurrentBreaks;
  DELETE FROM RealCurrentCalls;
  
  DELETE FROM RealAudit;
  DELETE FROM RealCdr;
  DELETE FROM RealCallEntry;
  DELETE FROM RealQueueLog;


  `;
  try {
    result = await pool.destinyReports.query(querySQL);
  } catch (error) {
    result = { error: error };
    console.log("error", error);
  }

  return result;
}

async function erase() {
  console.clear();
  console.log(
    `***********  REAL TABLES ERASED ${pool.destinyReports.config.connectionConfig.database} ***********`
  );
  await eraseRealData();
  console.log("All Erased");
  process.exit(0);
}

erase();


module.exports = {
  eraseRealData
};
