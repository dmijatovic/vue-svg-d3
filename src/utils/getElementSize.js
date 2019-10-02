/**
 * Calculating chart (svg) size based on el dimenensions.
 * This function is used to create svg element to fits the
 * el element.
 * @param {HTMLElement} el
 * @returns {Object}
 * {
 *  width: Number,
 *  height: Number
 * }
 */
function getElementSize(el,minWidth=300,minHeight=300) {
  let w = null,
    h = null,
    innerMargin = 8

  if (el) {
    let ps = window.getComputedStyle(el, null)
    w =
      parseInt(ps.width) -
      (parseInt(ps.paddingLeft) +
        parseInt(ps.paddingRight) +
        innerMargin)
    //minimum width
    if (w < minWidth) w = minWidth
    h =
      parseInt(ps.height) -
      (parseInt(ps.paddingTop) +
        parseInt(ps.paddingBottom) +
        innerMargin)
    // minimum height of 400 px
    if (h < minHeight) h = minHeight
  }
  let size = {
    width: w,
    height: h
  }
  return size
}

export default getElementSize