'use strict'

var ZSchema = require('z-schema')
var schema = require('./schema')

function validate(resumeJson, callback) {
  // Callers expect z-schema 2.4.x report object
  var callbackWrapper = function(err, valid) {
    if (err) {
      callback(err)
    } else {
      callback(null, { valid: valid })
    }
  }

  new ZSchema().validate(resumeJson, schema, callbackWrapper)
}

module.exports = {
  validate: validate,
  schema: schema,
}
