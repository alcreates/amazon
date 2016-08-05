// Dependency


var Sequelize = require("sequelize"); 
// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var sequelize = require("../config/connection.js"); 

// Creates a "Character" model that matches up with DB
var Orders = sequelize.define("orders", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	
	ASIN : {
		type: Sequelize.STRING,
	},
	Title : {
		type: Sequelize.STRING,
		
	},
	Price : {
		type: Sequelize.INTEGER,
	},
});

// Syncs with DB
Orders.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Orders;