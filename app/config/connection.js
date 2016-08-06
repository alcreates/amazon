// Dependencies
var Sequelize = require("sequelize");

// Lists out connection options
var source = {

    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "darksouls",
        database: "amazon"
    },

    jawsDB: {
        port: 3306,
        host: 'gx97kbnhgjzh3efb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: ' anmx0oub6cy1gmuz',
        password: 'kyobxva7yjah0vuh',
        database: 'y9air2capedepaz0'
    }
}

// Selects a connection (can be changed quickly as needed)
var selectedSource = source.jawsDB;

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
  host: selectedSource.host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

// Exports the connection for other files to use
module.exports = sequelize;