/****商品列表****/
class Cart {
    static checkOne;
    constructor() {
        Cart.checkOne=document.getElementsByClassName('check-one');
        Cart.list();
        Cart.checkAll();
    }

    /****商品列表***/
    static list() {
        // 1 获取商品id
        let goodsId = localStorage.getItem('cart');
        // console.log(goodId);
        goodsId = JSON.parse(goodsId)
        // 后台需要goods以字符串形式传递 str='1,2,4,6,7';
        var goodsIdStr = ''
        for (var id in goodsId) {
            goodsIdStr += id + ',';
        }
        // console.log(goodIdStr);
        // 2 发送axios请求,获取数据
        axios.post('http://localhost/day27/cart/server/cart.php?fn=lst', 'goodsId=' + goodsIdStr).then(res => {
            // console.log(res);
            let { meta, data } = JSON.parse(res);
            // console.log(meta, data);

            // 判断请求的状态
            if(meta.status==200){
                let html='';
                data.forEach(goods => {
                    // console.log(goods);
                    let {id,goodsName,price,goodsImg}=goods;
                    html+=`<tr>
                    <td class="checkbox"><input class="check-one check" type="checkbox"/></td>
                    <td class="goods"><img src="${goodsImg}" alt=""/><span>${goodsName}</span></td>
                    <td class="price">${price}</td>
                    <td class="count">
                        <span class="reduce">-</span>
                        <input class="count-input" type="text" value="${goodsId[id]}"/>
                        <span class="add">+</span></td>
                    <td class="subtotal">${(goodsId[id]*price).toFixed(2)}</td>
                    <td class="operation"><span class="delete">删除</span></td>
                </tr>`
                });
                // 追加到tbody
                let tbody=document.querySelector('tbody');
                tbody.innerHTML=html;
            }
        })


    }

    /****全选的实现*****/

    static checkAll(){
        let all =document.querySelectorAll('.check-all');
        // console.log(all);
        // 给全选绑定事件
        all[0].addEventListener('click',Cart.allEvent);
        all[1].addEventListener('click',Cart.allEvent);
    }
    // 全选事件方法
    static allEvent(){
        // console.log(111);
        // console.log(this);  // 表示当前点击的节点
        // 获取节点按钮的状态
        let check=this.checked;
        // console.log(check);
        // 获取所有的单选按钮
        console.log(Cart.checkOne);
    }
}

new Cart();