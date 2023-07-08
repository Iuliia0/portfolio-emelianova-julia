<template lang="">
  <div class="work-position">
      <div class="container">
        <h1 class="work-position__title">{{ $store.state.workPosition }}
        </h1>

        <HeaderItem 
            :array="skills" 
            color="light"/>
          <HeaderItem 
            :array="contacts" 
            :color="'light'"/>
          <HeaderItem 
            :array="experience" 
            color="light"/>
      </div>
  </div>
</template>
<script>
import { useStore } from 'vuex';
import HeaderItem from './HeaderItem.vue';

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