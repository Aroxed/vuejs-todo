import Vue from 'vue'
import Vuex from 'vuex'
import TodoList from '@/cls/model/TodoList.js'
import TodoListBackend from '@/cls/model/backend/TodoListBackend.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoItems: null
  },
  getters: {
    todoItemsGetItems(state) {
      return state.todoItems.getItems();
    }
  },
  mutations: { // cannot be asynchronous! (always sync)
    INIT_TODO: (state, storage) => {
      if (storage === 'vuex') {
        state.todoItems = new TodoList();
      }
      if (storage === 'backend')
      state.todoItems = new TodoListBackend();

    },
    ADD_TODO: (state, todoItem) => {
      state.todoItems.addItem(todoItem);
    },
    TOGGLE_DONE_TODO: (state, todoItemId) => {
      state.todoItems.toggleDone(todoItemId);
    },    
    DELETE_ITEM_TODO: (state, todoItemId) => {
      state.todoItems.deleteItem(todoItemId);
    },
    EDIT_ITEM_TODO: (state, item) => {
      state.todoItems.editItem(item.itemId, item.itemTitle);
    }
  },
  actions: { // can be asynchronous!
    INIT_TODO: (context, storage) => {
      context.commit('INIT_TODO', storage);
    },
    ADD_TODO: (context, todoItem) => {
      context.commit('ADD_TODO', todoItem);
    },
    TOGGLE_DONE_TODO: (context, todoItemId) => {
      context.commit('TOGGLE_DONE_TODO', todoItemId);
    },
    DELETE_ITEM_TODO: (context, todoItemId) => {
      context.commit('DELETE_ITEM_TODO', todoItemId);
    },
    EDIT_ITEM_TODO: async (context, item) => { 
      context.commit('EDIT_ITEM_TODO', item);
    }
  },
  modules: {
  }
})
