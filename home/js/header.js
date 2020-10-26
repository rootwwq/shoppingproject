// 获取我的订单前面的dl的节点,添加hover属性
/****我的订单样式变化****/
let topmenuObj=document.getElementsByClassName('my-order')[0];
// console.log(topmenuObj);
topmenuObj.onmouseover=function(){
    topmenuObj.className='top-menu my-order hover';
    // console.log(11111);
}
topmenuObj.onmouseout=function(){
    topmenuObj.className='top-menu my-order';
    // console.log(11111);
}

/****个人中心****/
let topmenucon=document.getElementsByClassName('my-mall')[0];
// console.log(topmenuObj);
topmenucon.onmouseover=function(){
    topmenucon.className='top-menu my-mall hover';
    // console.log(11111);
}
topmenucon.onmouseout=function(){
    topmenucon.className='top-menu my-mall';
    // console.log(11111);
}

/****客服中心****/
/****个人中心****/
let topmenucenter=document.getElementsByClassName('call-center')[0];
// console.log(topmenuObj);
topmenucenter.onmouseover=function(){
    topmenucenter.className='top-menu my-mall hover';
    // console.log(11111);
}
topmenucenter.onmouseout=function(){
    topmenucenter.className='top-menu my-mall';
    // console.log(11111);
}