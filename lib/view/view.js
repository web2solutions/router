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



var dhx_view = $dhx.ui.mvp.view.layout.extend({
  initialize: function(options) {
  //console.log('called initialize from factory');
    //console.log('app initialized from ' + options.from );
  }
});



/**
 * [Application view using Module Pattern]
 * @type {Module}
 */
var view = (function() {
 
    /**
     * [view's settings. Store the settings of each component of the view.]
     * @type {Object}
     */
    var _settings = {
      icons_path : 'icons/',
      sidebar : {
          parent: document.body, // id/object, container for sidebar 
          skin: "dhx_skyblue", // string, sidebar skin, optional
          template: "icons", // string, used template, "details" by default
          icons_path: "icons/", // string, path to the folder with icons
          //single_cell: true, // boolean, true to enable the single cell mode
          bubble: 6, // number, colored marker showing notifications count
          width: 100, // number, width of the left part
          header: true, // boolean, true to enable the header
          autohide: true, // boolean, true to enable autohide for navigation bar 

          items: [
            // items config
            {
              id: "users", // item id
              text: "Users", // item text
              icon: "clients.png", // icon used for the item
              selected: true // boolean, true to select an item
            },
            // separator config
            {
              id: "sep1", // separator id
              type: "separator" // item type, mandatory
            }, {
              id: "panel", // item id
              text: "Control Panel", // item text
              icon: "control_panel.png", // icon used for the item
            }, {
              id: "doc", // item id
              text: "Docs", // item text
              icon: "doc.png", // icon used for the item
            }
          ]

      },
      layout : {
        pattern: "1C",
        cells: [{
          id: "a",
          text: "Listing users"
        }]
      }
    },

    _private = {
      /**
         * [application wrapper and navigation widget]
         * @type {dhtmlXSideBar}
      */
      sidebar: null,
      /**
         * [layout for display users]
         * @type {[dhtmlxLayout]}
      */
      layout_users: null,
      /**
         * [grid for display users]
         * @type {[dhtmlxGrid]}
      */
      grid_users : null,

    },
    
    API = {
      
      /**
       * [_sidebar starts side bar as main wrapper of the application]
       * @return {[type]} [description]
       */
      sidebar: function() {
        
        if( _private.sidebar === null)
        {
          console.log( presenter._model.ui.sidebar.toJSON() );
          _private.sidebar = new dhtmlXSideBar( _settings.sidebar );
        }
        return _private.sidebar; 
      },
      
      layout_users: function() {
        if( _private.layout_users === null)
        {
          _private.layout_users = _private.sidebar.cells("users").attachLayout( _settings.layout );
          _private.layout_users.cells('a').hideHeader();
        }
        
        return _private.layout_users;
      },

      grid_users : function(){
        if( _private.grid_users === null)
        {
          _private.grid_users = _private.layout_users.cells("a").attachGrid();
        }
        
        return _private._grid_users;
      },

      /**
       * [render the view. Called once application starts]
       */
      render: function() {
        console.log('rendering view');
        this.sidebar();
        this.layout_users();
        this.grid_users();
      },

      /**
       * [subscriber function which receives messages from presenter]
       * @param  {[string]} topic [listened topic]
       * @param  {[Objec]} data  [message object]
       */
      _subscriber : function(topic, data) {
        console.log('view listener: message: ' + topic, data);
      }
    };
 
    return API;
}());