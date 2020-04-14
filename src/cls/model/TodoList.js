import Item from './Item.js';

export default class TodoList {
    constructor() {
        this.items = [];
    }

    _getItemIndex(itemId) {
        return this.items.findIndex( (item) => item.id === itemId); 
    }

    addItem(title) {
        const item = new Item(title);
        this.items.push(item);
    }

    deleteItem(itemId) {
        this.items.splice(this._getItemIndex(itemId), 1);
    }

    editItem(itemId, title) {
        const itemIndex = this._getItemIndex(itemId);
        this.items[itemIndex].changeTitle(title);
    }

    getTitle(itemId) {
        const itemIndex = this._getItemIndex(itemId);
        return this.items[itemIndex].title;
    }

    toggleDone(itemIdList) {
        this.items.map( (item) => {
            if (itemIdList.indexOf(item.id) > -1) item.toggleDone();
         }); 
    }
}