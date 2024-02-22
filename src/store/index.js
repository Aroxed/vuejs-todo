import Vue from 'vue'
import Vuex from 'vuex'
import TodoList from '@/cls/model/TodoList.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoItems: new TodoList()
  },
  mutations: { // cannot be asynchronous! (always sync)
    ADD_TODO: (state, todoItem) => {
      state.todoItems.addItem(todoItem);
    },   
    DELETE_ITEM_TODO: (state, todoItemId) => {
      state.todoItems.deleteItem([todoItemId]);
    },
    EDIT_ITEM_TODO: (state, item) => {
      state.todoItems.editItem(item.itemId, item.itemTitle);
    }
  },
  actions: { // can be asynchronous!
    ADD_TODO: (context, todoItem) => {
      context.commit('ADD_TODO', todoItem);
    },
    DELETE_ITEM_TODO: (context, todoItemId) => {
      context.commit('DELETE_ITEM_TODO', todoItemId);
    },
    EDIT_ITEM_TODO: async (context, item) => { 
      function justWait3Sec() { // waits for 3 seconds and resolves
        return new Promise(resolve => {
          setTimeout(() => {
            resolve();
          }, 3000);
        });
      }
      // it is for test purpose only: to show async operation e.g. waiting 3 seconds before update UI 
      await justWait3Sec(); 
      context.commit('EDIT_ITEM_TODO', item);
    }
  },
  modules: {
  }
})
