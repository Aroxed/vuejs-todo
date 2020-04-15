<template>
  <div id="app">
     <transition name="moveInUp">
         <router-view/> <!-- the area where routing is working (Add, Edit, Delete, Home) -->
     </transition>
  </div>
</template>

<script>
import  config from "./config.js";

export default {
  name: 'App',

  beforeMount() { 
    this.$store.dispatch('INIT_TODO', config.STORAGE); // backend - data at server; vuex - data in memory
  }
}
</script>

<style>
.moveInUp-enter-active{
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}
</style>
