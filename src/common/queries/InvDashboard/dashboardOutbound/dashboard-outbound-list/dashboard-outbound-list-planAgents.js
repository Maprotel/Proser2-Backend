// DASHBOARD INBOUND CALL ENTRY LIST
/**********************************
 * Tip vscode:
 * ctrl+k & ctrl+0 to view collapsed - ctrl+k & ctrl+j to expand
 */

// IMPORTS
import * as pool from "../../../../../connectors/pool";
import {
  objectDateToTextDate,
  valueFromObject
} from "../../../../functions/dateFunctions";

import {
  dateAndTimeSqlQuery,
  arrayToSqlQuery,
  objectToJsonSqlQuery,
  arrayToJsonSqlQuery,
  sqlIntervalSqlQuery,
  sqlIntervalGroupSqlQuery
} from "../../../../functions/sqlFunctions";

/**************************************** */
// Call Entry List
export async function dashboardOutboundListPlanAgents(userSelection) {
  let result = null;
  let resume_error = false;
  // let userSelection = DashboardSelection.userSelection;
  // let modalView = DashboardSelection.modalView;

  // if(userSelection.mode.name='Actual'){
  //   userSelection.start_date = userSelection.current_date;
  //   userSelection.end_date = userSelection.end_date;
  // }

  let query = `

  -- dashboardOutboundListAuditFunction --------------------
  -- FIELDS
  SELECT
  
  -- TIME & INTERVAL
     now() as now
     ,agent_plan_id
     ,agent_plan_agent_name
     ,agent_plan_agent_id
     ,agent_plan_date
     ,agent_plan_start_time
     ,agent_plan_end_time
     ,agent_plan_agent_type
  
      FROM
          AgentPlan
         
          -- ---------------------------------------------------------------
          -- CONDITIONS
          WHERE 1
          
          -- TIME AND DATE
          ${dateAndTimeSqlQuery(userSelection, "agent_plan_date")}
          
          
          -- END ----------------------------------------------------------
        `;

  try {
    let temp = await pool.destinyInventory.query(query);
    return temp.length < 1 ? result : temp;
  } catch (error) {
    return (result = { error: error });
  }
}

export function sqlModalView(modalView) {
  /*
   * Inserts interval fields in the select statement when interval applies
   */
  let result = null;

  if (modalView === "registrado-historico") {
    return `
    audit_break_id is null
    AND
    audit_datetime_init is not null
    `;
  } 

  return result;
}