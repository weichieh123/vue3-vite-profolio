<template>
  <div class="header" :class="{ active: isOpen }">
    <div class="logo" :class="{ active: isOpen }">
      <!-- <el-icon><video-camera-filled /></el-icon> -->
      <img src="/logo.png" alt="">
      <!-- <span> Weichieh</span> -->
    </div>
    <div class="sidemenu">
      <button
        class="sidemenu__btn"
        @click="toggleIsOpen"
        :class="{ active: isOpen }"
      >
        <span class="top"></span>
        <span class="mid"></span>
        <span class="bottom"></span>
      </button>
    </div>
    <nav :class="{ active: isOpen }">
      <div class="sidemenu__wrap">
        <ul class="sidemenu__list">
          <li class="sidemenu__item" @click="goHomePage"><a :class="{ active: isOpen }" href="#home" v-smooth-scroll>Home</a> </li>
          <li class="sidemenu__item" @click="goHomePage"><a :class="{ active: isOpen }" href="#about" v-smooth-scroll="{ offset: -50 }">About</a></li>
          <li class="sidemenu__item">
            <a :class="{ active: isOpen }" href="#works-layout" @click="goHomePage" v-smooth-scroll="{ offset: -50 }" >Works</a>
            <ul>
              <li><a :class="{ active: isOpen }" class="sub-item" href="#works-layout" @click="goHomePage" v-smooth-scroll="{ offset: -50 }">- Layout</a></li>
              <li><a :class="{ active: isOpen }" class="sub-item" href="#works-vue" @click="goHomePage" v-smooth-scroll="{ offset: -50 }">- Vue</a></li>
              <li><a :class="{ active: isOpen }" class="sub-item" href="#works-react" @click="goHomePage" v-smooth-scroll="{ offset: -50 }">- React</a></li>
              </ul>
            </li>
            <!-- <li class="sidemenu__item" @click="goInfoPage"><a :class="{ active: isOpen }">Info</a></li> -->
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const store = useStore();
const route = useRoute();
const router = useRouter();

const isOpen = computed(() => store.getters.getIsOpen);
const toggleIsOpen = () => {
  store.dispatch('toggleIsOpen');
};
const goHomePage = () => {
  toggleIsOpen()
  if (route.path === '/info') {
    router.push('/')
  }
};
const goInfoPage = () => {
  store.dispatch('toggleIsOpen');
  router.push('/info')
};
</script>

<style lang="scss" scoped>
@use '@/styles/views/header.scss' as *;
</style>
