// import Vue from 'vue'
// import VueRouter from 'vue-router'

import Home from "@/pages/Home";
//import ChartJS from "@/pages/ChartJS";

const ChartJSPage = () => import ('@/pages/ChartJS')
const HighchartsPage= () => import('@/pages/Highcharts')

export const routes = [
  { type: "link", path: "/", component: Home, label: "Home" },
  { type: "link", path: "/chartjs", component: ChartJSPage, label: "Chart.js - 1" },
  { type: "link", path: "/highcharts", component: HighchartsPage, label: "Highcharts - 1" }

];
