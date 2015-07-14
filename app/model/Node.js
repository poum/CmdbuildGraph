/**
 * Graph node
 */
Ext.define('CmdbuildGraph.model.Node', {
  extend: 'Ext.data.Model',

  fields: [
    { name: 'id' },
    { name: 'label', type: 'string' },
    { name: 'value', type: 'int'    },
    { name: 'title', type: 'string' },
    { name: 'image', type: 'string' },
    { name: 'shape', type: 'string' },
    { name: 'group', type: 'string' }
  ],

  validators: {
    id: 'presence'    
  }

});
