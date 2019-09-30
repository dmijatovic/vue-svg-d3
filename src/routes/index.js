// import Vue from 'vue'
// import VueRouter from 'vue-router'

import Home from "@/pages/Home";
import Line from "@/pages/Line1";

export const routes = [
  { type: "link", path: "/", component: Home, label: "Home" },
  { type: "link", path: "/line", component: Line, label: "Line" }
];
