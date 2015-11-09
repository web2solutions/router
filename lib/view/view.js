/**
 * this file '/lib/view/view.js' is transparently loaded.
 *   Just wrote your code here
 *   If you change the name of the view object, 
 *   please set the new name on presenter. eg:
 *   
 *     var presenter = {  
 *       _view : MyNewName
 *       ...
 *     };
 */




var main_view = $dhx.ui.mvp.main_view.extend({
  //initialize: function(options) {
  //  console.log('VIEW:: called initialize from main_view');
    //console.log('app initialized from ' + options.from );
  //}
 
});


var view = new main_view({
     
     _settings : {},

    initialize: function(options) {
      console.log('VIEW:: called initialize from view.initialize');

      console.log( this );

     
    },

    sidebar : null,

    _sidebar: function() {

      if (this.sidebar === null) {
        //console.log( this._settings.sidebar );
        model.ui.sidebar.set({ parent: this.container });
        model.ui.sidebar.set({ icons_path: this.icons_path });
        this.sidebar = new dhtmlXSideBar( model.ui.sidebar.toJSON() );
      }
      return this.sidebar;
    },

    /**
    * [render the view. Called once application starts]
    */
    render: function() {
      console.log('rendering view');
      this._sidebar();
    },

    /**
       * [subscriber function which receives messages from presenter]
       * @param  {[string]} topic [listened topic]
       * @param  {[Objec]} data  [message object]
       */
    _subscriber : function(topic, data) {
        console.log('view listener: message: ' + topic, data);
    }

});