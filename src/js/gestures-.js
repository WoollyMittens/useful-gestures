/*
	Source:
	van Creij, Maurice (2018). "gestures.js: A library of useful functions to ease working with touch and gestures.", http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// extend the constructor
var Gestures = function (config) {

	// PROPERTIES

	// METHODS

	this.only = function (config) {
		// start an instance of the script
		return new this.Main(config, this);
	};

	this.each = function (config) {
		var _config, _context = this, instances = [];
		// for all element
		for (var a = 0, b = config.elements.length; a < b; a += 1) {
			// clone the configuration
			_config = Object.create(config);
			// insert the current element
			_config.element = config.elements[a];
			// delete the list of elements from the clone
			delete _config.elements;
			// start a new instance of the object
			instances[a] = new this.Main(_config, _context);
		}
		// return the instances
		return instances;
	};

	// START

	return (config.elements) ? this.each(config) : this.only(config);

};
