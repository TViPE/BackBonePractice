(function($){
	// Define a model of type 'Beatle' with a 'job' attribute
	var Beatle = Backbone.Model.extend({
		default: {
			job: 'musician'
		}
	});

	// Create models for each member of the Beatles
	var john = new Beatle({firstName: 'John', lastName: 'Lennon'});
	var paul = new Beatle({firstName: 'Paul', lastName: 'McCartney'});
	var george = new Beatle({firstName: 'George', lastName: 'Harrison'});
	var ringo = new Beatle({firstName: 'Ringo', lastName: 'Starr'});

	//Create a collection using our models
	var theBeatles = Backbone.Collection([john, paul, george, ringo]);

	//Create a seperate model for Pete Best
	var pete = new Beatle({firstName: 'Pete', lastName: 'Best'});

	//Update collection
	// Remove event for 'Ringo' and add an event for 'Pete'.
	theBeatles.set([john, paul, george, pete]);


})(jQuery)