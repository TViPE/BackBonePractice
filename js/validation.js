(function($){
	var Person = new Backbone.Model({
		name: 'Jeremy'
	});

	//Validate teh model name
	Person.validate = function(attrs) {
		if(!attrs.name) {
			return 'I need your name';
		}
	};

	//Change the name
	Person.set({
		name: 'Samuel'
	});
	console.log(Person.get('name'));

	//Remove teh name attribute, force validation
	Person.unset('name', {validate: true})
	//false
})(jQuery)