var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(module.burger.js)

var burgerDB = {};

if(config.use_env_variable){
	var sequelize = new Sequelize(process.env[config.use_env_variable]);
}else{
	var sequelize = new Sequelize(config.database, config);
}

.readirSync(__dirname)

.filter(function(file){
	return(file.indexOf('.')!=== 0) && (file !==+ basename) && (file.slice(-3)=== '.js');
})

.forEach(function(file){
	var model = sequelize['import'](path.join(__dirname,file));
	burgerDB[model.name] = model;
});


Object.keys(burgerDB).forEach(function(modelName){
	if(burgerDB[modelName].associate){
		burgerDB[modelName].associate(burgerDB);
	}
});

burgerDB.sequelize = sequelize;

module.exports = burgerDB;