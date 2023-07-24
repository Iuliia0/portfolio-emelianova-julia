import { createStore } from 'vuex'

export default createStore({
  state: {
    skills: [
      { type: 'text', item: 'НАВЫКИ' },
      { type: 'text', item: 'HTML | БЭМ' },
      { type: 'text', item: 'CSS | SASS | SCSS' },
      { type: 'text', item: 'JavaScript' },
      { type: 'text', item: 'Vue, Vuex, Vue Router' },
      // { type: 'text', item: 'Англискй B1' },
      { type: 'text', item: 'Nunjucks' },
      { type: 'text', item: 'CMS Apostrophe' },
    ],

    contacts: [
      { type: 'text', item: 'СВЯЗАТЬСЯ' },
      { type: 'link', item: 'emelyanova.iuliia@gmail.com', link: 'mailto:julia03951@gmail.com' },
      { type: 'link', item: 'Telegram', link: 'https://t.me/jul55' },
    ],

    experience: [
      { type: 'text', item: 'КОММЕРЧЕСКИЙ ОПЫТ' },
      { type: 'text', item: 'AISA IT Сервис' },
    ],

    projects: [
      { 
        id: 0,
        type: 'коммерческий проект', 
        title: 'Единая карта жителя Петербурга', 
        tasks: ['создание виджетов в Apostrophe CMS', 
        'вёрстка страниц с использование виджетов', 
        'адаптив виджетов и страниц под версия для слабовидящих, для мобильных устройств',
        'создание компонентов на Vue'],
        tools: ['HTML | Nunjucks', 'Apostrophe CMS', 'SASS | Tailwind', 'JavaScript', 'Vue 3 | Vuex | Vue Router'],
        git: null,
        linkToProject: 'https://ekp.spb.ru/'
      },
      // { 
      //   id: 1,
      //   type: 'коммерческий проект', 
      //   title: 'карта жителя Омска', 
      //   tasks: ['вёрстка сайта', 'адаптив', 'реализовать версию для слабовидящих'],
      //   tools: ['HTML | CSS', 'JavaScript', 'Загрузка контента через CMS систему'],
      //   git: null,
      //   linkToProject: 'https://ek.yanao.ru/'
      // },
      { 
        id: 2,
        type: 'коммерческий проект', 
        title: 'Детское питание', 
        tasks: ['вёрстка сайта с нуля', 
        'адаптив для мобильных устройств'],
        tools: ['HTML | CSS', 'JavaScript'],
        git: null,
        linkToProject: 'https://mam-shop.ru/'
      },
    ],

    startDate: '2021-01-16',

    workPosition: 'Frontend-разработчик'
  },
  getters: {
    calculateExperience(state) {
      const today = new Date();
      const start = new Date(state.startDate);

      const diff = today - start;

      const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // Учитываем високосные годы
      const years = Math.floor(diff / millisecondsInYear);

      const millisecondsInMonth = 1000 * 60 * 60 * 24 * 30.44; // Средняя продолжительность месяца
      const months = Math.floor((diff % millisecondsInYear) / millisecondsInMonth);

      return state.experience[1].item = `${state.experience[1].item} - ${years} год ${months} месяцев`;
    }
  },
  mutations: {
  },
  actions: {

  },
  modules: {
  }
})
