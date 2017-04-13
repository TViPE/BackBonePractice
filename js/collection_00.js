(function($){
	var Todo = Backbone.Model.extend({
		default: {
			title: '',
			completed: false
		}
	});

	var TodosCollection =  Backbone.Collection.extend({
		model: Todo
	});

	var myTodo = new Todo({title: 'Read the whole book', id: 2});

	var a = new Todo({title: 'Go to Jamaica.'}),
		b = new Todo({title: 'Go to China'}),
		c = new Todo({title: 'Go to Disneyland'});

	// pass array of models on collection instantiation
	var todos = new TodosCollection([a, b]);
	console.log("Collection size: " + todos.length);

	// add a model to collection
	todos.add(c);
	console.log("Collection size: " + todos.length);

	// remove models from collection
	todos.remove([a,b]);
	console.log("Collection size: " + todos.length);

	//remove model from collection
	todos.remove(c);
	console.log("Collection size: " + todos.length);

	// Retrieve models
	var todo1 = new TodosCollection([myTodo]);
	
	// In Client-server aplications, coolections contain modesl obtained from the server. 
	// Anytime you're exchang data between the client and a server, you will need a way
	// to uniquely identify models. In Backbone, this is done using the id, cid, and 
	// idAttribute properties.
	var todo2 = todo1.get(2);
	console.log(todo2 === myTodo);

	var todoCid = todo1.get(todo2.cid);
	console.log(todoCid === myTodo); 


})(jQuery)