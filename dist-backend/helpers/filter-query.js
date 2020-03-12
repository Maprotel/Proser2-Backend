"use strict";

var array = [{
  id: 1,
  name: jorge
}, {
  id: 2,
  name: jose
}, {
  id: 1,
  name: juan
}];
var field = 'id_agent';

function filterToSql(array, field) {
  var resultado = '';

  if (array && field) {
    var temp = array.map(function (x) {
      return 'OR' + field + ' = ' + x.id;
    });
  }

  return result;
}

var query = filterToSql(array, field);
console.log('query', query);