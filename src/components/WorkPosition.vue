<template lang="">
  <div class="work-position" id="workPosition">
      <div class="container">
        <h1 class="work-position__title">{{ $store.state.workPosition }}
        </h1>

        <div class="work-position__about hidden-desktop">
          <HeaderItem 
            :array="skills" 
            color="light"
            headerColor="light"
            circleColor="light"/>
          <HeaderItem 
            :array="contacts" 
            color="light"
            headerColor="light"
            circleColor="light"/>
          <HeaderItem 
            :array="experience" 
            color="light"
            headerColor="light"
            circleColor="light"/>
        </div>

      </div>
  </div>
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
    HeaderItem
  }
}
</script>
<style lang="">
  
</style>