(function($){
	var Todo = Backbone.Model.extend({
		default: {
			title: '',
			completed: false
		}
	});

	var myTodo = new Todo();
	myTodo.set({
		title: 'Buy some cookies',
		completed: true
	});

	myTodo.on({
		'change:title' : titleChanged,
		'change:completed' : stateChanged
	});

	function titleChanged(){
		console.log('Title was changed');
	};

	function stateChanged(){
		console.log('The state was changed');
	};

	myTodo.set({title:'Get the groceries'});
})(jQuery)