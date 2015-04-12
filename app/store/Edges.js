/**
 * Graph edge store
 */
Ext.define('CmdbuildGraph.store.Edges', {
  extend: 'Ext.data.Store',

  model: 'CmdbuildGraph.model.Edge',

  proxy: {
    type: 'rest',
    url: '/pcp/liste.json'
  }
});
