/**
 * Graph edge
 */
Ext.define('CmdbuildGraph.model.Edge', {
  extend: 'Ext.data.Model',

  fields: [
    { name: 'id' },
    { name: 'from',   type: 'int' },
    { name: 'to',     type: 'int' },
    { name: 'length', type: 'int' },
    { name: 'width',  type: 'int' },
    { name: 'value',  type: 'int' },
    { name: 'style',  type: 'string' },
    { name: 'color',  type: 'string' },
    { name: 'title',  type: 'string' }
  ],

  validators: {
    from: 'presence',
    to:   'presence'  
  }

});
