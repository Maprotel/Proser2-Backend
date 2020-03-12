"use strict";

if (process.env.NODE_ENV !== "development") {
  require("dotenv").config();
}
/***************************** */


var util = require("util");

var mysql = require("mysql"); // REPORTS


var destinyReports = mysql.createPool({
  connectionLimit: 1000,
  connectTimeout: 60 * 60 * 1000,
  acquireTimeout: 60 * 60 * 1000,
  timeout: 60 * 60 * 1000,
  host: process.env.REPORTS_DB_HOST,
  user: process.env.REPORTS_DB_USER,
  password: process.env.REPORTS_DB_PASSWORD,
  database: process.env.PROSER_REPORTS_DATABASE,
  multipleStatements: true,
  max_statement_time: 20,
  connectionName: "destinyReports",
  insecureAuth: true
}); // ORIGIN

var origin = mysql.createPool({
  connectionLimit: 1000,
  connectTimeout: 60 * 60 * 1000,
  acquireTimeout: 60 * 60 * 1000,
  timeout: 60 * 60 * 1000,
  host: process.env.ORIGIN_DB_HOST,
  user: process.env.ORIGIN_DB_USER,
  password: process.env.ORIGIN_DB_PASSWORD,
  database: process.env.ORIGIN_ASTERISK_DB,
  multipleStatements: true,
  max_statement_time: 20,
  connectionName: "origin",
  insecureAuth: true
}); // REPORTS

var destinyInventory = mysql.createPool({
  connectionLimit: 1000,
  connectTimeout: 60 * 60 * 1000,
  acquireTimeout: 60 * 60 * 1000,
  timeout: 60 * 60 * 1000,
  host: process.env.INVENTORY_DB_HOST,
  user: process.env.INVENTORY_DB_USER_WRITE,
  password: process.env.INVENTORY_DB_PASSWORD_WRITE,
  database: process.env.PROSER_INVENTORY_DATABASE,
  multipleStatements: true,
  max_statement_time: 20,
  connectionName: "destinyInventory",
  insecureAuth: true
}); // REPORTS

var originInventory = mysql.createPool({
  connectionLimit: 1000,
  connectTimeout: 60 * 60 * 1000,
  acquireTimeout: 60 * 60 * 1000,
  timeout: 60 * 60 * 1000,
  host: process.env.INVENTORY_DB_HOST,
  user: process.env.INVENTORY_DB_USER_READ,
  password: process.env.INVENTORY_DB_PASSWORD_READ,
  database: process.env.PROSER_INVENTORY_DATABASE,
  multipleStatements: true,
  max_statement_time: 20,
  connectionName: "destinyInventory",
  insecureAuth: true
}); // Ping database to check for common exception errors.

origin.getConnection(function (err, connection) {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
      return err.code;
    }

    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
      return err.code;
    }

    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
      return err.code;
    }
  }

  return;
}); // Ping database to check for common exception errors.

destinyReports.getConnection(function (err, connection) {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
      return err.code;
    }

    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
      return err.code;
    }

    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
      return err.code;
    }
  }

  return;
}); // Ping database to check for common exception errors.

destinyInventory.getConnection(function (err, connection) {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
      return err.code;
    }

    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
      return err.code;
    }

    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
      return err.code;
    }
  }

  return;
}); // Ping database to check for common exception errors.

originInventory.getConnection(function (err, connection) {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
      return err.code;
    }

    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
      return err.code;
    }

    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
      return err.code;
    }
  }

  return;
}); // Promisify for Node.js async/await.

origin.query = util.promisify(origin.query);
destinyReports.query = util.promisify(destinyReports.query);
destinyInventory.query = util.promisify(destinyInventory.query);
originInventory.query = util.promisify(originInventory.query);
module.exports = {
  origin: origin,
  destinyReports: destinyReports,
  destinyInventory: destinyInventory,
  originInventory: originInventory
};