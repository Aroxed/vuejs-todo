<template>
    <div>
        <label for="item">Replace a title:</label>
        <p><input id="item" type="text" v-model="itemTitle" /></p>
        <p>
            <button @click="edit">Edit</button>
            <button @click="cancel">Cancel</button>
        </p>
    </div>    
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Edit',
  props: ['itemId'],
  
  data () {
      return {
          itemTitle: ''
      }
  },
  
  mounted() {

    if (this.itemId == null) { // and undefined  
        this.$router.push({name: 'Home'});
        return;
    }
    const title = this.$store.state.todoItems.getTitle(this.itemId);  
    this.itemTitle = title; 
  },

  methods: {
      edit() {
          this.$store.dispatch('EDIT_ITEM_TODO', {itemId: this.itemId, itemTitle:this.itemTitle});
          this.$router.push({name: 'Home'});
      },
      cancel() {
          this.$router.push({name: 'Home'});
      }

  }
}

</script>