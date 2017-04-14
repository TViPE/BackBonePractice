(function($){
	var Todo = Backbone.Model.extend({
		default: {
			title: '',
			completed: false
		}
	});

	var TodosCollection = Backbone.Collection.extend({
		model: Todo,
		url: '/todos' // Server URL
	});

	var todos = new TodosCollection();
	todos.fetch(); // Fetch models from Server

	var todo2 = todos.get(2);
	todo2.set('title', 'go fishing');
	todo2.save(); // sends HTTP PUT to /todos/2

	// Collection.create() is used to create a new model and add it to
	// the collection, and send it to the server in a single call.
	todos.create({title: 'Try out code samples'}); // sends HTTP POST to /todos and adds to collection
	 


})(jQuery)