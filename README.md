# Vue with plain SVG and D3 for dvg manipulation

This is a test how D3 van be used in conjunction with Vue.

## Setup

This project is setup on condesandbox and than saved to github. I believe that vue-cli 3.0 basic setup is used. I added vuex and vue-router.

## Lessons learned

- Lazy loading: I needed to add babel plugin and extend babelrc.
- Chart.js: I added ChartJS component to take configuration object with all info.The ChartJS lib is used to created chart on component mounting. NOTE: resizing the chart only works when explaning the window. When rectracting the window the chart does not resize. Futher investigation is required.
- Highcharts:
