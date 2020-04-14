<template>
    <div>
        <label for="item">Enter a title:</label>
        <p><input id="item" type="text" v-model="itemTitle" /></p>
        <p><button @click="add">Add</button></p>
    </div>    
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Add',
  data () {
      return {
          itemTitle: ''
      }
  },
  methods: {
      add() {
          this.$store.dispatch('ADD_TODO', this.itemTitle);
          this.$router.push({name: 'Home'});
      }
  }
}

</script>