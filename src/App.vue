<template>
  <div id="app">
     <transition name="moveInUp">
         <router-view/> <!-- the area where routing is working (Add, Edit, Delete, Home) -->
     </transition>
  </div>
</template>

<style>
.moveInUp-enter-active{
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}
</style>
