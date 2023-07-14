<template>
  <div class="home">
    <Header></Header>
    <WorkPosition></WorkPosition>
    <Project></Project>
    основная страница сайта
  </div>
</template>

<script>
import WorkPosition from '@/components/WorkPosition.vue';
// @ is an alias to /src
import Header from '../components/Header.vue';
import Project from '@/components/Project.vue';
export default {
  name: 'HomeView',
  components: {
    Header,
    WorkPosition,
    Project,
  }
}
</script>
