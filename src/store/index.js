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
