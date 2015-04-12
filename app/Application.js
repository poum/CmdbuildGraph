/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('CmdbuildGraph.Application', {
    extend: 'Ext.app.Application',
    
    name: 'CmdbuildGraph',

    config: {

      /* 
       * CMDBuild base URL
       */
      CMDBuildURL: 'http://localhost:8080',

      /*
       * CMDBuild credentials
       */
      CMDBuildCredentials: { 
        username: 'admin',
        password: 'admin'
      },

      /*
       * graph image path
       */
      graphImagePath: 'resources/'
    },

    stores: [
        'Nodes',
        'Edges'
    ],
    
    launch: function () {

      var url = this.getCMDBuildURL() + '/cmdbuild/services/rest/v1';

      //Ext.Ajax.setCors(true);

      // 1. Open session
      Ext.Ajax.request({
        url:    url + '/sessions',
        method: 'POST',
        jsonData: {
          username: this.getCMDBuildCredentials().username,
          password: this.getCMDBuildCredentials().password,
        },

        success: function(response) {
          console.log(response);
        },
        failure: function(response) {
          alert('oups');
          console.error(response);
        },
        scope: this
      });

      // 2. On success, loads stores
      // 3. On success, prepare data and draw graph
    }
});
