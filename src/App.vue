<template>
  <div class="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import Header from './components/layout/Header.vue';

const store = useStore();

</script>

<style lang="scss">
body,
html {
  margin: 0;
}
.app {
  overflow: hidden; //scroll options
  height: 100vh;
  font-family: 'Montserrat', sans-serif;

  .section {
    position: relative;
    height: calc(100vh - #{$navHeight});
    top: $navHeight;
    scroll-behavior: smooth;

    overflow-y: scroll; //scroll options
    scrollbar-width: none; //for firefox
    &::-webkit-scrollbar {
      display: none;
    }

    // scroll-snap-type:  y mandatory;
    > * {
      /* section裡面的所有元件 */
      width: 100vw;
      overflow-x: hidden;
      // min-height: calc(100vh - #{$navHeight});
      // scroll-snap-align: start;
    }
  }
}
</style>
