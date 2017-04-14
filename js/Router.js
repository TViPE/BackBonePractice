(function($){
	var TodoRouter = Backbone.Router.extend({
		// Define the route and function maps for this router

		routes: {
			"about" : "showAbout",
			// Sample usage: http://example.com/#about

			"todo/:id" : "getTodo",
			// This si an example of using a ":param" varible which allows us to match
			// any of the componenets between two URL slashes
			// Sample usage: http://example.com/#todo/5 */

			"search:/:query" : "searchTodos",
			// We can also define multyple rotes that are bound to the same map function,
			// in this case searchTodos(). Note below how we're optionally passing in a 
			// reference to a page number if one is supplied
			// Sample usage: http://example.com/#search/job

			"search/:query/:p:page" : "searchTodos",
			// As we can see, URLs may contain as many ":param's as we wish
			// Sample usage: http://example.com/#search/job/p1

			"todos/:id/download/*documentPath": "downloadDocument",
			// This is an example of using a *splat. Splats are able to match any number of 
			// URL components and can eb combined with ":param"s*
			// Sample usage: http://example.com/#todos/5/download/files/Meeting_schedule.doc 

			"*other" : "defaultRoute",
			// This is a default route that also use *splat. Consider the
			// default route a wildcard for URLs that are tiether not matched or where
			// the user has incorrectly typed in a route path manually
			// Sample uage: http://example.com/# <anything>

			"option(/:item)": "optionalItem",
			"named/optional/(y:z)": "namedOptionalItem",
			// Router URLs also support optional parts via parentheses, without having 
			// to use a regex
		},

		showAbout: function(){

		},

		getTodo: function(id){
			console.log("You are trying to reach todo: " + id);
		},

		searchTodos: function(query, page) {
			var page_number = page || 1;
			console.log("Page number: " + page_number + " of the results for todos containing the word: " + query);
		},

		downloadDocument: function(id, path) {

		},

		defaultRoute: function(other){
			console.log('Invalid. You attempted to reach: ' + other);
		}
	});

	var myTodoRouter = new TodoRouter();
})(jQuery)