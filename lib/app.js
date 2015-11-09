


$dhx.ui.mvc.on('DOMready', function(){

    //console.log('start app');

    var application = new $dhx.ui.mvc.application( {
        appId : "" + Math.random() + ""
        , presenter : {}
        , controller : function(){
          console.log('main controller');
        }
        , wrapper : document.body
    } );


    var welcome = application.route({
        path : '/welcome'
        , view : 'welcome'
        , presenter : false
        , controller : function(){
          
        }
        ,wrapper : document.getElementById('view')
    });

    var page1 = application.route({
        path : '/page1'
        , view : 'template1'
        , presenter : false
        , controller : function(){
          this.greeting = 'Hello world!';
          this.moreText = 'first view.';

          this.x = function( text ){
            //alert(text);
            this.moreText = text;
          }

        }
        ,wrapper : document.getElementById('view')
    });

    

    console.log(page1);


    var page2 = application.route({
        path : '/page2'
        , view : 'template2'
        , presenter : false
        , controller : function(){
          this.heading = 'I\'m page two!';
        }
        ,wrapper : document.getElementById('view')
    });


    application.dispatch({
        path : '/page1'
    });

    


    var x = 0;
    var i = window.setInterval(function () {
        ++x;
        page1.x('Hello ' + x);

        if(x == 100)
            window.clearInterval(i);


    }, 300);



    var object = {};

    _.extend(object, Backbone.Events);

    object.on("alert", function(msg) {
      alert("Triggered " + msg);
    });

    object.trigger("alert", "an event");

  })