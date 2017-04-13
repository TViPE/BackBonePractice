(function($){
	// Rather than adding or removing modesl individually, You might want to update
	// an entire at once. Collection.set() takes an array of models and performs the 
	// necessary add, remove , and change opeartions required to update the collection.

	var TodosCollection =  new Backbone.Collection();

	TodosCollection.add([
		{id: 1, title: 'go to Jamaica', completed: false},
		{id: 2, title: 'go to China', completed: false},
		{id: 3, title: 'go to Disneyland', completed: true}
	]);

	// we can listen for add/change/remove events
	TodosCollection.on("add", function(model) {
		console.log("Added " + model.get('title'));
	});

	TodosCollection.on("remove", function(model) {
		console.log("Removed " + model.get('title'));
	});

	TodosCollection.on("change:completed", function(model) {
		console.log("Completed " + model.get('title'));
	});

	// Reset the entire content of the collection
	TodosCollection.on("reset", function() {
		console.log("Collection reset");
	});

	TodosCollection.set([
		{id: 1, title: 'go to Jamaica', completed: true},
		{id: 2, title: 'go to China', completed: false},
		{id: 4, title: 'go to Disney World', completed: false}
	]);
	console.log("Collection size: " + TodosCollection.length);

	TodosCollection.reset([
		{title: 'go to Cuba', completed: false}
	]);

	// todoCollection.reset() -  Clear out a collection completely.
	console.log("Collection size: " + TodosCollection.length);

	// Another Example for reseting a collection
	// The list of previous models is available in  "options.previousModels"
	var todo = new Backbone.Model();
	var todos = new Backbone.Collection([todo])
	.on('reset', function(todos, options) {
		console.log(options.previousModels);
		console.log([todo]);
		console.log(options.previousModels[0] === todo) // Comparing previous model with todo model  - Should be true
	});

	todos.reset();
})(jQuery)