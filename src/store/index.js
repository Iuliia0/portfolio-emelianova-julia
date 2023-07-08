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
      { type: 'text', item: 'ISA IT Сервис - 1 год 1 месяц' },
    ],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
