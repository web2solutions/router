/**
 * This file '/lib/presenter/presenter.js' is transparently loaded.
 * Just wrote your code here.
 * Dont change the name of the presenter object
 */

var presenter = (function() {
 	'strict';
    var API = {
		_view: view,
		_model: model,
		start: function() {
			console.log('start from presenter defined by user');
		},
		taskCrud: function() {
			console.log('hello from taskCrud');
		}
	};
 
    return API;
}());