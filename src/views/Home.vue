<template>
  <div class="home">

    <TodoTable :todoItems="$store.state.todoItems.items" 
      @toggleDone="toggleDone" @deleteItem="deleteItem" @editItem="editItem"/>
    <button @click="add">Add</button>

  </div>
</template>

<script>

import TodoTable from '../components/TodoTable.vue'

export default {
  name: 'Home',
  components: { TodoTable },
  data() {
      return {
        
      }
  },

  methods: {
    add() {
      this.$router.push({name:'Add'});
    },
    toggleDone(itemId) {
      this.$store.dispatch('TOGGLE_DONE_TODO', itemId);
    },
    deleteItem(itemId) {
      this.$router.push({name:'Delete', params: {itemId: itemId}});
    },
    editItem(itemId) { 
      this.$router.push({name:'Edit', params: {itemId: itemId}});
    }
  }
}
</script>
