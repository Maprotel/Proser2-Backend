// DISPLAY INBOUND REPORT
/**********************************
 * Tip vscode:
 * ctrl+k & ctrl+0 to view collapsed - ctrl+k & ctrl+j to expand
 */

// IMPORTS
import * as pool from "../../../../connectors/pool";
import moment from "moment";

export async function displayShow(type) {
  let result;
  let resume_error = false;

  let query = `
  
  SELECT * FROM ProShowDisplay 
          `;

  // console.log("query", query);

  try {
    result = await pool.destinyReports.query(query);
    return result;
  } catch (error) {
    resume_error = true;
    return {
      error: "displayShow " + error
    };
  }
}
