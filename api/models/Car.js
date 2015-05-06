/**
* Car.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
connection: 'someMysqlServer',
  attributes: {
    Name: {
        type: 'string',
    },
    Brand: {
        type: 'string'
    },
    Model: {
        type: 'string'
    },
    driver: {
        model: 'Driver',
        required: false
    }
  }
};