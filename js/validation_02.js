(function($){
	var myModel = Backbone.Model.extend({
		validate: function(attribs) {
			if(attribs.hasOwnProperty('myString')) {
				attribs.myString = attribs.myString.trim();
			}
			if (attribs.hasOwnProperty('myNumber')) {
				attribs.myNumber = 43;
			}
			if (attribs.hasOwnProperty('myBoolean')) {
				attribs.myBoolean = false;
			}
			if (attribs.hasOwnProperty('myObject')) {
				attribs.myObject.foo = 'baz';
			}

		}
	});

	//Try and set our attribs using 'set'
	var someInstance = new myModel();

	var attribs = {
		myString: "   Is an untrimmed String  ",
		myNumber: 42,
		myBoolean: true,
		myObject: {
			foo: "bar"
		}
	};

	someInstance.set(attribs, {validate: true});
	console.log(someInstance.get('myString'));
	console.log(someInstance.get('myNumber'));
	console.log(someInstance.get('myBoolean'));
	console.log(someInstance.get('myObject').foo);

	function modifiesObject(obj) {
		//bah hasOwnProperty checks
		obj.myString = obj.myString.trim();
		obj.myNumber = 43;
		obj.myBoolean = false;
		obj.myObject.foo = "baztopia";
	}

	modifiesObject(attribs);
	console.log(attribs.myString);
	console.log(attribs.myNumber);
	console.log(attribs.myBoolean);
	console.log(attribs.myObject.foo);

})(jQuery)