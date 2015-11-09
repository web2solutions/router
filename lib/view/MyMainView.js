var MyMainView = {
  sidebar: null,
  _sidebar: function() {
    this.sidebar = new dhtmlXSideBar({

      parent: document.body, // id/object, container for sidebar 
      skin: "dhx_skyblue", // string, sidebar skin, optional
      template: "icons", // string, used template, "details" by default
      icons_path: "icons/", // string, path to the folder with icons
      single_cell: false, // boolean, true to enable the single cell mode
      bubble: 6, // number, colored marker showing notifications count
      width: 100, // number, width of the left part
      header: true, // boolean, true to enable the header
      autohide: false, // boolean, true to enable autohide for navigation bar 

      items: [
        // items config
        {
          id: "clients", // item id
          text: "Clients", // item text
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

    });
  },
  layout = null,
  _layout : function(){

    this.layout = this.sidebar.cells("clients").attachLayout({
            pattern: "2E",
            cells: [{id: "a", text: "Recent"}, {id: "b", text: "Upcoming updates"}]
    });
  }
  render: function() {
    console.log('rendering view');
    this._sidebar();
    this._layout();
  },
  taskCrud: function() {
    console.log('hello from taskCrud');
  }
};