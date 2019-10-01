// import Vue from 'vue'
// import VueRouter from 'vue-router'

import Home from "@/pages/Home";
//import ChartJS from "@/pages/ChartJS";

const ChartJSPage = () => import ('@/pages/ChartJS')

export const routes = [
  { type: "link", path: "/", component: Home, label: "Home" },
  { type: "link", path: "/chartjs", component: ChartJSPage, label: "Chart.js - 1" }
];
