/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    connection: 'someMysqlServer',
    tableName: 'users',
    attributes: {
        id:'int',
        name: 'string',
        pass:'string',
        complete_name: 'string'
    },
    autoPK:false,
    autoCreatedAt:false,
    autoUpdatedAt:false
};