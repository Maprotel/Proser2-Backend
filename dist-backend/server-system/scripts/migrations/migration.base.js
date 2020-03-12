'use strict';
/**
 * Automatically migrates base models
 */

console.log('Starting Migration'); // base loopback models

var MODELS = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role', 'Userbase'];

module.exports = function updateBaseModels(app, next) {
  // reference to our datasource
  var mysql_proser = app.dataSources.mysql_proser; // check if the model is out of sync with DB

  mysql_proser.isActual(MODELS, function (err, actual) {
    if (err) {
      throw err;
    }

    var syncStatus = actual ? 'in sync' : 'out of sync';
    console.log('');
    console.log("Base models are ".concat(syncStatus));
    console.log(''); // skip if models in sync

    if (actual) {
      return next();
    }

    console.log('Migrating Base Models...'); // update models

    mysql_proser.autoupdate(MODELS, function (_err) {
      if (_err) {
        throw _err;
      }

      console.log('Base models migration successful!');
      console.log('');
      next();
    });
  });
};