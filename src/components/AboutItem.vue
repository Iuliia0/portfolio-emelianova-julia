import { useStore } from 'vuex';
<template lang="">
  <div class="about">
    <div class="circle" :class="circleColor"></div>
    <ul class="about__list">
      <li 
        v-for="item in list"
        class="about__item"
        :class="color"
        >
        <span 
          v-if="item.type === 'text'">
          {{ item.item }}
        </span>

        <a 
          v-else-if="item.type === 'link'" 
          href="{{ item.link }}"
          class="about__link"
          :class="color">
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
    props: ['array', 'color', 'headerColor', 'circleColor'],
    setup(props) {
      const store = useStore()

      const color = `about__color-${props.color}`
      const headerColor = `about__color-${props.headerColor}`
      const circleColor = `circle__${props.circleColor}`

      onBeforeMount(() => store.getters.calculateExperience)

      return {
        color: color,
        headerColor: headerColor,
        circleColor: circleColor,
        list: props.array
      }
    }
  };
</script>
<style lang=""></style>
