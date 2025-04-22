<template>
  <div id="section" class="section" @click="closeMenu">
    <Home />
    <About />
    <WorksLayout />
    <WorksVue />
    <WorksReact />
  </div>
</template>

<script setup>

import Home from './Home.vue';
import About from './About.vue';
import WorksLayout from './Works/WorksLayout.vue';
import WorksVue from './Works/WorksVue.vue';
import WorksReact from './Works/WorksReact.vue';

const closeMenu = () => {
  store.dispatch('closeMenu');
};
</script>
