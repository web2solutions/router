/**
 * This file '/lib/presenter/presenter.js' is transparently loaded.
 * Just wrote your code here.
 * Dont change the name of the presenter object
 */

console.log( view );

var presenter = (function() {
 	'strict';
    var API = {
		_view: view,
		_model: model,
		start: function() {
			console.log('PRESENTER: start from presenter defined by user');
		},
		taskCrud: function() {
			console.log('hello from taskCrud');
		}
	};
 
    return API;
}());