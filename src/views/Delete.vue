<template>
    <div>
        <p> Are you sure to delete an item #<b>{{ itemId }}</b>"?</p>
        <p>
            <button @click="deleteItem">Yes</button> &nbsp;
            <button @click="cancel">No</button>
        </p>
    </div>    
</template>

<script>

export default {
  name: 'Delete',
  props: ['itemId'],
  
  mounted() {

    if (this.itemId == null) { // and undefined  
        this.$router.push({name: 'Home'});
        return;
    }
  },

  methods: {
      deleteItem() {
          this.$store.dispatch('DELETE_ITEM_TODO', this.itemId);
          this.$router.push({name: 'Home'});
      },
      cancel() {
          this.$router.push({name: 'Home'});
      }

  }
}

</script>