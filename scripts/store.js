'use strict';
/*global cuid, Item */

const store = (function () {
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
  };

}() );

function findById(id) {
  return store.items.find((item) => item.id === id);
};

function addItem(name) {
  try {
    Item.validateName(name);
    this.items.push(Item.create(name));
  }
  catch(error) {
    console.log(`cannot add item ${error.message}`)
  }
}

function findAndToggleChecked(id) {
  this.findById(id).checked = !this.findById(id).checked;
}

function findAndUpdateName(id, newName) {
  try {
    Item.validateName(name);
    this.findById(id).name = newName;
  }
  catch(error) {
    console.log(`cannot update name ${error.message}`)
  }
}

function findAndDelete(id) {
  const toBeRemoved = this.findById(id);
  this.items.filter(function(item){
    return toBeRemoved;
  })
}