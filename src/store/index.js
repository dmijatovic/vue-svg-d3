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
      console.log("getBubbleData...state...", state)
      return state.home.bubbles;
    }
  },
  mutations:{
    updateBubbleRadius(state, action){
      console.log("updateBubbleRadius...", action)
      const {pos,val} = action.payload
      if (state.home.bubbles[pos]){
        state.home.bubbles[pos]['r']=val
      }
    }
  }
});

export default store;
