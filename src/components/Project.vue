<template lang="">
    <section id="product" class="product">
      <div class="container">
        <div class="product__block" v-for="project in projects" :key="project.id">
          <h1 class="product-title">
            {{ project.type }} | <span class="product-title__color-light">{{ project.title }}</span>
          </h1>
          <div class="product__site-navigation">
            <div class="site-navigation">
              <!-- <div class="circle circle__dark hidden-mobile"></div> -->
              <h4>Задачи</h4>
              <ul class="site-navigation__list">
                <li class="site-navigation__item site-navigation__color-dark" v-for="task in project.tasks">{{ task }}</li>
              </ul>
            </div>
            <!-- site-navigation -->
            <div class="site-navigation">
              <!-- <div class="circle circle__dark hidden-mobile"></div> -->
              <h4>Инстурменты</h4>
              <ul class="site-navigation__list">
                <li class="site-navigation__item site-navigation__color-dark" v-for="tool in project.tools">{{ tool }}</li>
              </ul>
            </div>
            <!-- site-navigation -->
          </div>
          <ul class="product-nav">
            <li class="product-nav__item">
              <a v-if="project.git" :href="project.git" class="product-nav__link" target="blank">
                <span class="product-nav__text">git</span>
                <img class="product-nav__img" src="../assets/img/arrow.svg" alt="Arrow">
              </a>
              <a :href="project.linkToProject" class="product-nav__link" target="blank">
                <span class="product-nav__text">page</span>
                <img class="product-nav__img" src="../assets/img/arrow.svg" alt="Arrow">
              </a>
            </li>

          </ul>
          <div class="product__line">
            <hr>
          </div>
        </div>
      </div>
    </section>
</template>
<script>
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()

    return {
      projects: store.state.projects
    }
  }

}
</script>
