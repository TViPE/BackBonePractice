// DELETING MODELS FROM THE SERVER

// A model can be removed from the containing collection and the server by calling
// its "destroy()" method. Unlike "Collection.remove()" which only removes a model
// from a collection, "Model.destroy()" will also send an HTTP DELETE to the 
// collection's url

(function($){
	var Todo = Backbone.Model.extend({
		default: {
			title: '',
			completed: false
		}
	});

	var TodosCollection = Backbone.Collection.extend({
		model: Todo,
		url: '/todos'
	});

	var todos = new TodosCollection();
	todos.fetch(); // fetching models from server

	var todo2 = todos.get(2);
	todo2.destroy(); // send HTTP DELETE to todos/2 and removes from collection
})(jQuery)