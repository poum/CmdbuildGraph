/**
 * Graph node store
 */
Ext.define('CmdbuildGraph.store.Nodes', {
  extend: 'Ext.data.Store',

  model: 'CmdbuildGraph.model.Node',

  proxy: {
    type: 'rest',
    url: '/pcp/liste.json'
  }
});
