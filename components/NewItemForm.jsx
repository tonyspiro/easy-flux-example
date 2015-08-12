import React from 'react';
import ListStore from '../stores/ListStore';
import AppDispatcher from '../dispatcher/AppDispatcher';

class NewItemForm extends React.Component {

  createItem(e){

    e.preventDefault();
    let items = ListStore.getItems();
    let item_title = React.findDOMNode(this.refs.item_title).value.trim();
    React.findDOMNode(this.refs.item_title).value = '';
    
    let id = items.length;
    
    /* 
    This is where the magic happens, no need to shoot this action all the way to the root of your application
    to edit state.  AppDispatcher does this for you.
    */
    AppDispatcher.dispatch({
      action: 'add-item',
      new_item: {
        name: item_title,
        id: id
      }
    });

  }

  render(){

    return <form onSubmit={ this.createItem.bind(this) }>
        <input type="text" ref="item_title"/>
        <button>Add new item</button>
      </form>
  }
}

export default NewItemForm;
