
/**
 * Return x position of chart group based on margins provided
 * @param {Array} margin array with top,right,bottom,left values
 */
export const getChartTop = margin => {
  if (!margin) return 0
  if (margin.length!==4) return 0
  return margin[0]
}

export const getChartLeft = margin => {
  if (!margin) return 0
  if (margin.length!==4) return 0
  return margin[3]
}

export const getChartWidth = config =>{
  if (!config) return undefined
  const {size, margin} = config
  const w = size.width - (margin[1] + margin[3])
  return w
}

export const getChartHeight = config =>{
  if (!config) return undefined
  const {size, margin} = config
  const h = size.width - (margin[0] + margin[2])
  return h
}
