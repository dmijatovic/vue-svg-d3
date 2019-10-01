export const homeText = {
  title: "Create svg bubbles",
  message: `
    This example creates svg circles using vue component called Circles.
    The data is stored in vuex store. State has initalData and circles data arrays.
    The initialData approach makes it possible to have intial values for sliders.
    The sliders in turn emit chage in the input values. The parent component
    listens for the input changes (onInput event) event and commits mutation to store.
    Circle data information is displayed below bubble chart.
    You can change the radius of each circle using sliders.
  `
};


export const chartjsText = {
  title: "Chart.js example 1",
  message: `
    Example of creating Chart.js using vue. This sample uses
    component ChartJS. This component expects config object with
    all info including the data. The data is received from Vuex store.
    In this example static JS objects are created in store/charts folder.
    BTW this page should be lazy loaded. As iti included refference to Chart.js
    this might be optimal approach. I have not exmined chunks so I cannot confirm
    that loading works as conceptually intended.
    REMARK: THIS SAMPLE SEEM TO RESIZE ONLY WHEN EXPANGING WINDOW.
    RESIZING DOES NOT WORK WHEN RETRACTING.
  `
};