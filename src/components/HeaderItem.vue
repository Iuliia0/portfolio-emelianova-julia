import { useStore } from 'vuex';
<template lang="">
  <div class="about">
    <div class="circle"></div>
    <ul class="about__list">
      <li 
        v-for="item in list"
        class="about__item"
        >
        <span 
          v-if="item.type === 'text'">
          
          {{ item.item }}
        
        </span>

        <a 
          v-else-if="item.type === 'link'" 
          href="{{ item.link }}"
          class="about__link">
          {{ item.item }}
        </a>
      </li>

    </ul>
  </div>
</template>
<script>
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';

  export default {
    props: ['array'],
    setup(props) {
      const store = useStore()

      onBeforeMount(() => store.getters.calculateExperience)

      return {
        list: props.array
      }
    }
  };
</script>
<style lang=""></style>
