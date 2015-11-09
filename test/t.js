QUnit.test("basic checking", function(assert) {
	
	var application = new $dhx.ui.mvc.application( {
        appId : Math.random()
        , presenter : {}
        , controller : function(){
          console.log('main controller');
        }
        , wrapper : document.body
    } );


	console.log(application);

	assert.ok( application instanceof $dhx.ui.mvc.application, "constructor instanceof");
});