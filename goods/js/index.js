class Goods {
    // 实例化时自动调用
    constructor() {
        Goods.list();
    }
    // 获取节点的分装
    static $$(ele) {
        return document.querySelector(ele);
     }
    // 获取商品信息
    // strtic 静态方法
    // 静态方法类只属于某个类
    static list() {
        // 1 发送sjax请求
        axios.get('http://localhost/project/goods/server/server.php?fn=lst').then(res => {
            // console.log(res);
            // 将数据转化为对象
            let { meta, data } = JSON.parse(res)
            // console.log(res);
            // console.log(meta, data);

            // 判断请求的状态
            if (meta.status == 200) {
                // console.log(data);
                // data是对象数组,必须先循环
                // console.log(11111);
                let html = '';
                data.forEach(ele => {
                    // console.log(ele);
                    let { id, title, imgsrc, ticket, give, way1, way2, name, describe, heighlight, capacity, THB, RMB } = ele;
                    html += ` <li class="item">
                    <div class="goods-content" goods-item="" data-storage="10" data-goods-id="34661" data-common-id="33163"
                        data-favorite="false">
                        <!--商品大图-->
                        <div class="goods-pic">
                            <a href="javascript:" title="${title}">
                                <img src="${imgsrc}"
                                    title="${title}" alt="${title}">
                            </a>
                        </div>
                        <div class="goods-pic-scroll-show">
                            <div class="show-box">
                                <ul>
                                </ul>
                            </div>
                        </div>
                        <!--商品详细信息-->
                        <div class="promotion_text">
                            <div class="label-div">
                                <span class="label-span present-bgcolor">${ticket}</span>
                                <span class="label-span present-bgcolor">${give}</span>
                                <span class="label-span new-product">${way1}</span>
                                <span class="label-span new-product">${way2}</span>
                            </div>
                            <div class="promotion_title" style="margin: 0;">
                                <h1 class="promotion_name">${name}</h1>
                                <p class="promotion_texted">${describe}<span class="highlight">${heighlight}</span> ${capacity}</p>
                            </div>
                            <div class="promotion_price" style="margin:10px 0;">
                                <span class="price_1">${THB}</span>
                                <span class="price_2">${RMB}</span>
                            </div>
                        </div>
                        <div class="goods-info">
                       
                        </div>
                    </div>
                    <div class="clear"></div>
                </li>`;
                });
                // 追加到页面中
                let cont =Goods.$$('.list_pic_goods_box');
                // console.log(cont);
                cont.innerHTML = html;
            }
        })
       Goods.add();
    }


    static addEvent(){
        var addObj=Goods.$$('.promotion_text').addEventListrner('mouseover',Goods.add(addObj))
    //     Goods.$$('.promotion_text').onmouseover=()=>{
            // Goods.$$('.goods-info').innerHTML+=`<div class="floating_layer" style="z-index:999;top:225px;;height:80px"><a class="buy" href="javascript:;" nc-add-cart=""><i class="shopping-cart"></i>加入购物车</a><a class="collect"><i></i></a></div>`
            // console.log(11111);
        }
    static add(){
        console.log(addObj);
    }
    // }
    /*
    移动添加购物车的那些
     <div class="floating_layer" style="z-index:999;top:225px;;height:80px"><a class="buy" href="javascript:;" nc-add-cart=""><i class="shopping-cart"></i>加入购物车</a><a class="collect"><i></i></a></div>
    */
    // 添加购物车的方法
    // static addCart(id, num) {
    //     // console.log(1111);
    //     // console.log(id, num);
    //     /*
    //     购物车逻辑
    //     1 判断cart这个key是否存在
    //     2 存在就判断商品是否存在
    //      2-1 商品不存在增加
    //      2-2 商品不存在则新增
    //     3 不存在则新增cart
    //     */

    //     // 1 获取cart
    //     let cartGoods = localStorage.getItem('cart');

    //     // 2 判断cart是否存在
    //     if (cartGoods) {  // 存在
    //         cartGoods = JSON.parse(cartGoods);
    //         // 2-1 判断商品数量是否存在
    //         // attr就是存在的商品id
    //         for (let attr in cartGoods) {
    //             // 购物车中的id,等于当前添加的id,商品已存在
    //             if (attr == id) {
    //                 num += cartGoods[id]
    //             }
    //         }
    //         // 设置商品,商品存在就更新数量,不存在就新增
    //         cartGoods[id] = num;
    //         localStorage.setItem('cart', JSON.stringify(cartGoods));
    //     } else {//不存在
    //         //{商品id:数量}
    //         cartGoods = { [id]: num };
    //         // console.log(cartGoods);
    //         cartGoods = JSON.stringify(cartGoods);
    //         localStorage.setItem('cart', cartGoods)
    //         // console.log(cartGoods);
    //     }
    // }
}
new Goods();