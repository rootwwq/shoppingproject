// 首先获取所有的li标签,然后遍历所有的li标签
// 事件委托实现获取第几个li
// let ulObjs=document.getElementById('menu');
// // 获取div添加style样式
// // let divObj=document.getElementsByTagName('cate-part')[];
// // console.log(ulObjs);
// ulObjs.addEventListener('mouseover',function(e){
//     let target=e.target;
//     console.log(target);
//     if(target.nodeName=='LI'){
//         // console.log(target);
//         // target.className='.cate-menu-item .hover' 

//     }
// })

// 获取li标签;
let lisObjs = $$('.cate-menu-item');

for (let i = 0; i < lisObjs.length; i++) {
    // console.log(i);
    lisObjs[i].onmouseover = function (e) {
        $$('.cate-menu-item')[i].className = 'cate-menu-item hover';
        $$('.cate-part')[i].style.display = 'block ';
    }
    lisObjs[i].onmouseout = function (e) {
        lisObjs[i].className = 'cate-menu-item';
        $$('.cate-part')[i].style.display = 'none';
    }
}

function $$(ele) {
    return document.querySelectorAll(ele);
}
