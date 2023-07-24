<template lang="">
  <header class="header">
    <div class="container">
      <nav class="header-info header__info">
        <div class="header-info__about">

          <HeaderItem 
            :array="skills" 
            color="default"
            headerColor="dark"
            circleColor="dark"/>
          <HeaderItem 
            :array="contacts" 
            color="default"
            headerColor="dark"
            circleColor="dark"/>
          <HeaderItem 
            :array="experience" 
            color="default"
            headerColor="dark"
            circleColor="dark"/>

        </div>
        <div class="header-info__logo">
          <img src="../assets/img/logo.svg" alt="Emelianova Julia" class="logo">
        </div>
      </nav>

    </div>
  </header>
</template>
<script>
import { useStore } from 'vuex';
import HeaderItem from './AboutItem.vue';

export default {
  setup() {
    const store = useStore()

    return {
      skills: store.state.skills,
      contacts: store.state.contacts,
      experience: store.state.experience,
    }
  },
  components: {
    HeaderItem,
  }
}
</script>
<style lang="">
  
</style>