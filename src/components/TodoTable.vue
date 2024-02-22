<template>
  <div class="table">
    <table class="bordered">
      <tr v-if="todoItems">
        <th>Title</th>
        <th>Done</th>
        <th>Operations</th>
      </tr>
      <tr v-for="todoItem in todoItems" :key="todoItem.id">
        <td>{{ todoItem.title}}</td>
        <td><input type="checkbox" v-model="todoItem.done"></td>
        <td>
          <button @click="deleteItem(todoItem.id)">Delete</button> &nbsp;
          <button @click="editItem(todoItem.id)">Edit</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TodoTable',
  props: {
    todoItems: Array
  },
  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
    },
    editItem(id) {
      this.$emit('editItem', id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table, th, td {
  border: 1px solid black;
}
</style>
