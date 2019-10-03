import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//pulling static data for chart configs
import {barChartDemoConfig} from '@/store/charts/chartjs.config.js'
import {hcLineDemoConfig} from '@/store/charts/hc.config.js'
import {d3barchart} from '@/store/charts/d3.barchart.config.js'

//create store
const store = new Vuex.Store({
  state: {
    home: {
      initData: [
        { cx: 100, cy: 200, r: 20, fill: "red" , id:'circle-red' },
        { cx: 230, cy: 200, r: 30, fill: "green", id:'circle-green' },
        { cx: 340, cy: 200, r: 40, fill: "blue", id:'circle-blue' }
      ],
      circles:[]
    },
    chartjs:{
      barChartDemoConfig
    },
    highcharts:{
      hcLineDemoConfig
    },
    d3:{
      barchart:{
        ...d3barchart
      }
    }
  },
  getters: {
    getInitData(state){
      //console.log("getInitData...", state.home.initData)
      return state.home.initData;
    },
    getCircleData(state) {
      //console.log("getCircleData...", state.home.circles)
      return state.home.circles;
    },
    getChartJSBarChartDemoConfig(state){
      //console.log("getChartJSBarChartDemoConfig...", state.chartjs.barChartDemoConfig)
      return state.chartjs.barChartDemoConfig
    },
    getHighchartsLineDemoConfig(state){
      //console.log("get HC demo...", state.highcharts.hcLineDemoConfig)
      return state.highcharts.hcLineDemoConfig
    },
    getD3BarChartConfig(state){
      return state.d3.barchart.config
    },
    getD3BarChartDataSet(state){
      return state.d3.barchart.dataset
    }
  },
  mutations:{
    initCircles(state, action){
      //console.log("initCircles...", action)
      state.home.circles = action.payload
    },
    updateCircleRadius(state, action){
      //console.log("updateCircleRadius...", action)
      const {pos,val} = action.payload
      if (state.home.circles[pos]){
        state.home.circles[pos]['r']=val
      }
    }
  }
});

export default store;
