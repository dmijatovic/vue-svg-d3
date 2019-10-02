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

export const highchartsText = {
  title: "Highcharts example 1",
  message: `
    Example of Highcharts chart in Vue component. The component expects
    configuration object with all options including data. The approach is
    similair to ChartJS component. In this case also making window smaller
    would not resize chart. I believe making chart smaller with flex approach
    might be a challenge?!?
  `
};

export const d3circlesText = {
  title: "D3 controled svg circles",
  message: `
    Example of svg circles controlled by D3. It seems that vue component will not update
    on property change if vue does not see that this property is used in the html template
    of the component. The approach seem logical, but in case of D3 circle component,
    where svg elements are dynamicaly created by D3, it causes the update problem because
    the props are not defined in the template of the component. To test this comment the
    div.radius-panel and see if the circle radius will be updated. Quick fix of this problem
    is to set display:none to template element where one of the props will be used. In
    that case prop is not visible on the screen but Vue engine will register it and
    run update cycle on the component each time the value is changed.
  `
};

