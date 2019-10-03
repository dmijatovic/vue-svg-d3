// import Vue from 'vue'
// import VueRouter from 'vue-router'

import Home from "@/pages/Home";
//import ChartJS from "@/pages/ChartJS";

const ChartJSPage = () => import ('@/pages/ChartJS')
const HighchartsPage= () => import('@/pages/Highcharts')
const D3CirclesPage=()=>import('@/pages/D3Circles')
const D3BarChartPage=()=>import('@/pages/D3BarChart')

export const routes = [
  { type: "link", path: "/", component: Home, label: "Home" },
  { type: "link", path: "/chartjs", component: ChartJSPage, label: "Chart.js - 1" },
  { type: "link", path: "/highcharts", component: HighchartsPage, label: "Highcharts - 1" },
  { type: "link", path: "/d3circles", component: D3CirclesPage, label: "D3 - Circles" },
  { type: "link", path: "/d3barchart", component: D3BarChartPage, label: "D3 - Bar chart" }


];
