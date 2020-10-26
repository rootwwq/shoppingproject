
            // 1 获取节点
            let screenObj = document.getElementById('screen');
            let ulObj = screenObj.firstElementChild;  //获取ul
            let lisObj = ulObj.children;//获取ul下面的li
            let olObj = screenObj.lastElementChild; //获取ol
    
    
            let leftObj = document.getElementById('left');
            let rightObj = document.getElementById('right');
    
            //2 创建和图片数量相同的按钮
            let ImgLen = lisObj.length;
            for (var i = 0; i < ImgLen; i++) {
                let olLi = document.createElement('li');
                // olLi.innerHTML = i + 1;
                //默认选中第一个li
                if (i == 0) olLi.className = 'current';
                olLi.onclick = banner;
                olLi.setAttribute('key', i)
                olObj.appendChild(olLi)
            }
    
            //全局索引
            var imgIndex = 0;
            //获取图片的宽度
            var imgW = lisObj[0].offsetWidth;
    
            //点击按钮的回调函数
            function banner() {
                imgIndex = this.getAttribute('key');
    
                //计算图片的位置
                var target = -imgIndex * imgW;
                startMove(ulObj, { left: target }, function () {
    
                });
                selOl();
            }
    
            //鼠标移动到box上显示按钮,移走消失
            screenObj.parentElement.onmouseover = function () {
                leftObj.parentElement.style.display = 'block'
            }
    
    
            //鼠标移出box,隐藏按钮
            screenObj.parentElement.onmouseout = function () {
                leftObj.parentElement.style.display = 'none'
            }
    
            //点击切换到下一张
            //克隆第一张图片放到最后
            let cloneImg = lisObj[0].cloneNode(true);
    
    
            // 防止过快点击的按钮
            let isCLick=true;
            //放到ul的最后面
            ulObj.appendChild(cloneImg)
            var change = false;
            rightObj.onclick = function () {
    
                if(!isCLick) return;
                isCLick=false;
                // 判断是否为最后一张图片
                if (imgIndex == olObj.children.length - 1) {
                    /*
                    思路 1 从第五张切换到第六张
                         2 在运动函数的回调函数中,设置ul的left为0
                         效果就迅速切换到第一张了
                    */
                    change = true;
                    var target = -olObj.children.length * imgW;
                    imgIndex = 0;
    
    
                } else {//非最后一张
                    imgIndex++;
                    var target = -imgIndex * imgW;
                    // console.log(imgIndex);
                    change = false;
                }
                startMove(ulObj, { left: target }, function () {
                    // ulObj.style.left='0px';
                    // if(imgIndex==olObj.children.length-1)
                    change && (ulObj.style.left = '0px');
                    //当上一张图片运动完成,才能点击下一张
                    isCLick=true;
                });
                selOl();
            }
    
            //点击切换上一张
            leftObj.onclick = function () {
                if(!isCLick) return;
                isCLick=false;
                if (imgIndex == 0) {
                    var totelImgLen = ulObj.children.length;
                    ulObj.style.left = -(totelImgLen - 1) * imgW + 'px';
                    //最大索引是长度-1,在去除克隆的一张
                    imgIndex = totelImgLen - 2;
                } else {
                    imgIndex--;
                }
                var target = -imgIndex * imgW;
                startMove(ulObj, { left: target }, function () {
                    isCLick = true;
                });
                selOl();
            }
            
            function autoplay(){
                timess=setInterval(function(){
                    rightObj.onclick();
                },5000)
            }
            autoplay();
            //让点击的按钮选中
            function selOl() {
                for (var i = 0; i < olObj.children.length; i++) {
                    olObj.children[i].classList.remove('current')
                }
                // 给当前操作的按钮添加这个类
                olObj.children[imgIndex].classList.add('current')
            }