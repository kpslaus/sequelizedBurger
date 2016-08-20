var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var app = express();

app.get('/', function(req, res){
	res.send('wasaaahhhhhppp!!');
});

route.get('/burgers', function(req, res){
	burgers.all(function(data){
		var burgerObject = { burgers: data};
		console.log(burgerObject);
		res.render('index', burgerObject);
	});
});

router.post('/burgers/create', function(req, res){
	burgers.create(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function(){
		res.redirect('/burgers');
	});
});

router.put('.burgers/update/:id', function(req, res){
	var condition = "id = " + req.params.id;

	console.log('condition', condition);

	burgers.update({ devoured: req.body.devoured} condition, function(){
		res.redirect('/burgers');
	});
});

module.exports = router;