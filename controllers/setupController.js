var Todos = require('../models/todoModel');

module.exports = function(app) {
	app.get('/api/setupTods', function(req, res) {
		var starterTodos = [
		{
			username:'test',
			todo: 'buy milk',
			isDone: false,
			hasAttachment: false
		},
		{
			username: 'test',
			todo: 'feed dog',
			isDone: false,
			hasAttachement: false
		},
		{
			username:'test',
			todo: 'learn node',
			isDone:false,
			hasAttachement:false
		}];
		Todos.create(starterTodos, function(err, results) {
			res.send(results);
		});
	});
}