(function($){
	var TodosCollection = new Backbone.Collection();

	TodosCollection.on("change:title", function(model) {
		console.log("Change my mind! I should " + model.get("title"));
	});

	// listen for add/remove evetns which occur when models are added to 
	// or removed from a collection.
	TodosCollection.on("add", function(todo) {
		console.log("I should " + todo.get("title") + ". Have I done it before? " + (todo.get("completed") ? "Yeah!" : "No."));
	});

	TodosCollection.add([
		{ title: "go to Jamaica", completed: false},
		{ title: "go to China", completed: false},
		{ title: "go to Disneyland", completed: true}
	]);

	TodosCollection.add([
		{ title: 'go to New York', completed: false, id: 4}
	]);

	var myTodo = TodosCollection.get(4);
	myTodo.set('title','go fishing');

})(jQuery)