import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    home: {
      bubbles: [
        { cx: 100, cy: 200, r: 20, fill: "red" },
        { cx: 230, cy: 200, r: 30, fill: "green" },
        { cx: 340, cy: 200, r: 40, fill: "blue" }
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
