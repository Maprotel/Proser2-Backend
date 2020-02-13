import * as pool from "../../../connectors/pool";
import { removeRowDataPacket } from "../../helpers/mysql-helper.js";
import moment from "moment";


/*
let intervalid; 
let condition = true;
async function testFunction() {
  intervalid = setInterval(() => {
    // I use axios like: axios.get('/user?ID=12345').then
    new Promise(function(resolve, reject){
      resolve('something');
    }).then(res => {
      if (condition) {
        eraseRealData();
      } else {
        clearInterval(intervalid);
      }    
    });  
  }, 3600);  
}
*/

// you can use this function like
// testFunction();
// or stop the setInterval in any place by 
// clearInterval(intervalid)


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
    console.log('/*** ereased real tables **/');
    
  } catch (error) {
    result = { error: error };
    console.log("error", error);
  }

  return result;
}


async function runEraseReal ( ) {

  setInterval( () => {
    console.log('/*** ERASING REAL ******/');
    try {
      // testFunction();
      console.log('/*** Print ******/');
      eraseRealData();
    } catch (error) {
      console.log('error', error);
    }
  }, 3600000 );
}

runEraseReal( );




/************************************************************************ */

// npx babel-node src/sync/etl/load/load_erase_real.js
