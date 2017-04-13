/*
Views

Views in Bacbkbone don't contain the HTML markup for your application; they contain the logic
begind the presentation of the model's data to the user. THis is usually achieved using 
JavaScript templating. A view's render() method can be bound to model's change() event, 
enabling the view to instantly reflect model changes without requiring a full page refresh.
*/

(function($){
	var TodoView = Backbone.View.extend({
		tagName: 'li',

		//Cache the template function for a single item
		todoTpl: _.templage("An example template"),

		events: {
			'dbclick label': 'edit',
			'keypress .edit': 'updateOnEnter',
			'blur .edit': 'close'
		},

		initialize: function(options) {
			// In Backbone 1.1.0, if you want to access passed options 
			// your view, you will need to save them as follows:
			this.options = options || {};
		},

		// Re-render the title of the todo item
		render: function() {
			this.$el.html(todoTpl(this.model.attributes));
			this.input =  this.$('edit');
			return this;
		}

		edit: function() {
			//executed when todo label is double clicked
		},

		close: function() {
			// eecuted when to do loses focus
		},

		updateOnEnter: function(e) {
			// executed on each keypress when in todo edit mode,
			// but we'll wait for enter to get in action
		}
	});

	var todoView = new TodoView();

	// log reference to a DOM element that corresponds to the view instance
	console.log(todoView.el);
})(jQuery)