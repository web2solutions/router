/**
 * this file '/lib/model/model.js' is transparently loaded.
 *   Just wrote your code here
 *   If you change the name of the view object, 
 *   please set the new name on presenter. eg:
 *   
 *     var presenter = {  
 *       _model : MyModelName
 *       ...
 *     };
 */


var model = {};

model.ui = (function() {
  var _private = {

    sidebar : Backbone.Model.extend({
      defaults: {
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
      initialize: function(){
          console.log("Welcome to this world");
      }
    }),

  },

  API = {
    sidebar : new _private.sidebar()

  };


  return API;

}());


console.log( model.ui.sidebar.toJSON() );
//console.log( model.ui.sidebar  );
