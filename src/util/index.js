
/**
 *  对比容器与图片size，得到图片最优放置大小
 * params: 容器大小(mx, my)，图片大小(sx, sy)
 */
export const computedImageSize = (mx, my, sx, sy) => { 
  let x, y; 
  if (mx >= sx){
    if(my >= sy){
      x = sx;
      y = sy;
    } else {
      y = my;
      x = y * sx / sy
    }
  } else {
    if (my < sy){
      let ty = sy * mx / sx; 
      if (ty > my){
        y = my;
        x = y * sx / sy;
      } else {
        x = mx;
        y = x * sy / sx;
      }
    } else {
      x = mx;
      y = x * sy / sx;
    }
  } 
  return {
    x,
    y 
  }
}