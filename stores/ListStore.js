// ListStore.js
import {EventEmitter} from 'events';
import _ from 'lodash';

let ListStore = _.extend({}, EventEmitter.prototype, {

  // Mock default data
  items: [
    {
      name: 'Item 1',
      id: 0
    },
    {
      name: 'Item 2',
      id: 1
    }
  ],

  // Get all items
  getItems: () => {
    return ListStore.items;
  },

  // Add item
  addItem: (new_item) =>{
    ListStore.items.push(new_item);
  },

  // Remove item
  removeItem: (item_id) =>{
    
    let items = ListStore.items;
    
    _.remove(items, (item) => {
      return item_id == item.id;
    });
    
    ListStore.items = items;

  },

  // Emit Change event
  emitChange: () =>{
    ListStore.emit('change');
  },

  // Add change listener
  addChangeListener: (callback) => {
    ListStore.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: (callback) => {
    ListStore.removeListener('change', callback);
  }

});

export default ListStore;
