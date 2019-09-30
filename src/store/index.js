import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    home: {
      bubbles: [
        { cx: 10, cy: 15, r: 20, fill: "red" },
        { cx: 30, cy: 35, r: 3, fill: "green" },
        { cx: 40, cy: 45, r: 40, fill: "blue" }
      ]
    }
  },
  getters: {
    getBubbleData(state) {
      return state.home.bubles;
    }
  }
});

export default store;
