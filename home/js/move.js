// 运动三要素: 谁运动,方向,目标值
// {left:500,top:1000}

var times = '';
//(boxObj,{left:500,top:200})
function startMove (ele, obj, callback) {
  var onOff = false;
  clearInterval(times);

  times = setInterval(function () {
    // 遍历运动的方向和目标值
    for (var attr in obj) {
      // 计算speed 需要目标值  实时位置
      let tmpPos = parseInt(getPos(ele, attr));
      var speed = (obj[attr] - tmpPos) / 10;
      // 对speed取整
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
      // 判断是否到达目标值
      if (obj[attr] == tmpPos) {
        onOff = true;
      }
      // 让元素动起来
      ele.style[attr] = tmpPos + speed + 'px'

    }
    // 属性都运动完成清除定时器

    if (onOff) {
      clearInterval(times);
      callback && callback()
    }
  }, 50)
}

function getPos (ele, attr) {
  // 获取的值,带有px
  if (ele.currentStyle) {
    return ele.currentStyle[attr];

  } else {
    return getComputedStyle(ele)[attr];
  }
}