var connection = require('./orm.js');


var table = "allBurgers";

var orm = {

	allBurgers: function(callback){
		var s = 'SELECT * FROM' + table;

		connection.query(s, function(err, res){
			callback(res);
		});
	},

	searchBurger: function(name, callback){
		var s = 'SELECT * FROM' + table + 'WHERE burger_name = ?';

		connection.query(s, [name], function(err, res){
			callback(res);
		});
	},

	addBurger: function(burger, callback){

		var burger_name = burger.name.replace(/\s+/g, '').toLowerCase();
		console.log(burger_name);

		var s = "INSERT INTO" + table + "(burger_name, devoured, date) VALUES (?, ?, ?)";

		connection.query(s, [burger_name, burger.name, burger.devoured, burger.date], function(err, res){

			callback(res);
		});
	}


};

module.exports = orm;