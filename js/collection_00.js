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

	//pass array of models on collection instantiation
	var todos = new TodosCollection([myTodo]);
	console.log("Collection size: " + todos.length);
})(jQuery)