import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {id: 'abc123', name:'Adam'},
    categories: ['sustainability', 'education', 'food', 'community'],
    todos: [
      {id: 1, text: '...', done: true},
      {id: 2, text: '...', done: false},
      {id: 1, text: '...', done: true},
      {id: 4, text: '...', done: false}],

      events: [
        {id: 1, title: '...', organizer: '...'},
        {id: 2, title: '...', organizer: '...'},
        {id: 3, title: '...', organizer: '...'},
        {id: 4, title: '...', organizer: '...'}],

    count: 0    
  },


  mutations: {
    INCREMENT_COUNT(state, value){
      state.count += value
    }
  },
  actions: {
    updateCount({state, commit}, value){
      if(state.user){
        commit('INCREMENT_COUNT', value)
      }
    }
  },
  modules: {
  },
  getters: {
    catLength: state => {
      return state.categories.length
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    activeTodosCount: state => {
      return state.todos.filter(todo => !todo.done).length
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
