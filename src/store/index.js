import { createStore } from 'vuex'
import axios from 'axios'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
  path: '/ToDo',
  name: 'ToDo',
  component: () => import('../views/ToDo.vue')
  }
]

export default createStore({
  state: { //zde ukládáme data. Všechny komponenty mají přístup k datům zde
    counter :0,
    colorCode: 'blue'
      
  },
  mutations: { //"methods" které mění data v "state". Jediné jak se data v "state" dají změnit je skrze "mutation"
  //commit
     increaseCounterR(state, randomNumber) {
       state.counter += randomNumber
     },
     decreaseCounterR(state, randomNumber) {
      state.counter -= randomNumber
     },
     setColorCode(state, newValue)  {
       state.colorCode = newValue
     },
     increaseCounter(state) {
      state.counter++
    },
    decreaseCounter(state) {
      state.counter--
    },
    SetToZero(state)  {
      state.counter=0;
    }     
  },
  actions: { //"methods" které nemohou měnit data v "state", ale mají k nim přístup
  //dispatch
   increaseCounterR( { commit } ) {
     console.log('increaseCounterR (action)')
     axios('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new').then(response =>{
     commit('increaseCounterR', response.data)
    })
   },
   decreaseCounterR( { commit } ) {
    console.log('decreaseCounterR (action)')
    axios('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new').then(response =>{
    commit('decreaseCounterR', response.data)
   })
  },
  setColorCode({ commit }, newValue) {
    commit('setColorCode', newValue)
    }
  },
  getters: { //předvod pro začátek
    counterSquared(state) {
      return state.counter * state.counter
    }
  },
  modules: { //dále rozděluje moduly na další sate, mutation, action, getters...
  }
})
