//验证码的生成与追加
// 获取a标签
let codeObj = document.getElementById('code-pic');
let textObj = document.getElementById('verification');

let num = createCode()
textObj.innerHTML = num;
// 生成随机数
function createCode() {
    code = "";
    var codeLength = 4; //验证码的长度
    var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    //所有候选组成验证码的字符，当然也可以用中文的
    for (var i = 0; i < codeLength; i++) {
        var charNum = Math.floor(Math.random() * codeChars.length);
        code += codeChars[charNum];
    }
    return code;

}



/*******表单的验证*******/
var user = document.getElementById('user');
var pwdObj = document.getElementById('pwd');
var repwdObj = document.getElementById('repwd');
let tipObj = document.getElementsByClassName('input-tip');
let yanzhengObj = document.getElementById('yanzheng');
// console.log(yanzhengObj.value);


user.onchange = function () {
    username = user.value;
    console.log(username);
    checkUser(username)
}

pwdObj.onchange = function () {
    pwd = pwdObj.value;
    checkPwd(pwd)

}

repwdObj.onchange = function () {
    pwd = pwdObj.value;
    repwd = repwdObj.value;
    checkRepwd(pwd, repwd)
}

yanzhengObj.onchange = function () {
    let Num = yanzhengObj.value;//输入的值
    // num 是随机数
    validation(Num, num);
}




// //用户名验证
// let strongObj = document.createElement('strong');
// strongObj.className = 'strong'

// let one = false;
// let two = false;
let three = false;
let four = false;
let flag=0;
/****注册数据上传实现****/
let butObj = document.getElementById('button');
let projectObj = document.getElementsByClassName('project');
// console.log(projectObj);
// console.log(butObj);
butObj.onclick = function () {
    if ((three == true) && (four == true)) {
        // p0();
        axios.get('http://localhost/project/login/server/server.php?fn=lst').then(res => {
            // console.log(res);
            // console.log(meta,data);
            let { meta, data } = JSON.parse(res)
            // console.log(meta, data);
            if (meta.status == 200) {
                // console.log('登录成功!!!');
                // location.reload();
                data.forEach(ele => {
                    let { users, pwd } = ele;
                    // console.log(users, pwd);
                    if (users == user.value && pwd == pwdObj.value) {
                        flag=1;
                    }
                    
                });
                if(flag==1){
                    // p0()
                    // // console.log(111);
                    // let times='';
                    // times=setInterval(()=>{
                        location.href='http://localhost/project/home/html/';
                    // },2000)
                flag=0;
                }else{
                    p1();
                    location.reload();
                }
            }
        })
    }
}
function p0() {
    swal("登录成功!", "去登录购物吧!!!", "success");
}
function p1() {
    swal("登录失败!", "请核对用户信息是否正确", "error");
   

}





/******表单各个验证函数******/
function checkUser(username) {
    // var reg = /^[a-zA-Z][a-zA-Z0-9]{3,8}$/;
    let reg = /^[A-Za-z]{1}[A-Za-z0-9]{3,8}/;
    if (reg.test(username) == false) {
        // projectObj[0].className=one;
        // projectObj[0].style.display = 'block';
        // tipObj[0].style.display = 'none'
        // console.log('输入错误');
        one = false;
        return one;
    }
    // projectObj[0].style.display = 'none';
    // tipObj[0].style.display = 'block'
    one = true;
    // console.log(111);
    // console.log('输入合法');
    return one;
}
//密码验证
function checkPwd(pwd) {
    var reg = /^[a-zA-Z0-9]{4,10}$/;
    if (reg.test(pwd) == false || pwd == '') {
        // pwdId.innerHTML = "密码不能含有非法字符，长度在4-10之间";
        // tipObj[1].style.display = 'none'
        // projectObj[1].style.display = 'block';
        two = false;
        return two;
    }
    // projectObj[1].style.display = 'none';
    // tipObj[1].style.display = 'block'
    two = true;
    // console.log(222);
    return two;
}

function checkRepwd(pwd, repwd) {
    if (pwd != repwd) {
        projectObj[0].style.display = 'block';
        tipObj[0].style.display = 'none';
        three = false;
        return three;
    }
    projectObj[0].style.display = 'none';
    tipObj[0].style.display = 'block'
    three = true;
    // console.log(333);
    return three;
}

function validation(Num, num) {
    // Num是输入的
    // num 是产生的随机数
    Num = Num.toUpperCase();
    num = num.toUpperCase();
    if (Num != num) {
        tipObj[1].style.display = 'none'
        projectObj[1].style.display = 'block'
        four = false;
        return false;
    }
    projectObj[1].style.display = 'none';
    tipObj[1].style.display = 'block'
    four = true;
    // console.log(444);
    return four;
}

function onclode() {
    num = createCode();
    textObj.innerHTML = num;

}

codeObj.onmousemove = function () {
    codeObj.children[0].style.display = 'block'
}
codeObj.onmouseout = function () {
    codeObj.children[0].style.display = 'none'
}



