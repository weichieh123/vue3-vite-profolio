<template>
  <div class="card-info">
    <h4 class="info-title">Accomplishment</h4>
    <ul class="info-list" v-for="(item, index) in work.accomplishment" :key="index">
      <li>{{item}}</li>
    </ul>
    <p class="info-content">{{work.content}}</p>
    <el-icon @click="emit('close', work)" class="close-btn"><Close /></el-icon>
    <div class="links">
      <a v-if="work.website" :href="work.website"><el-button class="links-icon intro-links-color" :icon="Promotion" circle /></a>
      <a v-if="work.github" :href="work.github"><div class="links-icon"><img class="img-fullscreen" src="/Works/GitHub-white.png" alt="GitHub"></div></a>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { Promotion } from '@element-plus/icons-vue';

const props = defineProps({
  work: {
    type: Object,
  },
});

const { work } = reactive(props);
// eslint-disable-next-line no-undef
const emit = defineEmits(['close']);

</script>

<style lang="scss" scoped>
@use '@/styles/views/cardInfo.scss' as *;
</style>
