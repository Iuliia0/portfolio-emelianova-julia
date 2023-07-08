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
  export default {
    props: ['array'],
    setup(props) {
      return {
        list: props.array
      }
    }
  };
</script>
<style lang=""></style>
