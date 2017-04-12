(function($){
	var Todo = Backbone.Model.extend({
		//Default todo attribute values
		default: {
			title: '',
			completed: false
		},

		initialize: function(){
			console.log('This model has been initialized');
			this.on('change:title', function(){
				console.log('Title value for this model has changed');
			});
		},

		setTitle: function(newTitle){
			this.set({title: newTitle});
		}
	});

	var myTodo = new Todo();

	//Both fo the following changes trigger the listener:
	myTodo.set('title','Check what\'s logged/');
	myTodo.setTitle('Go Fishing on Sunday');	

	//But, this change is not observed, so no listener is triggered:
	myTodo.set('completed', true);
	console.log('Todo set as completed: ' + myTodo.get('completed'));
})(jQuery);