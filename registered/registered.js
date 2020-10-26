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
    // console.log(1111);
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

let one = false;
let two = false;
let three = false;
let four = false;
/****注册数据上传实现****/
let butObj = document.getElementById('button');
let projectObj = document.getElementsByClassName('project');
// console.log(projectObj);
// console.log(butObj);
butObj.onclick = function () {
    // console.log(1111);
    if ((one ==true )&&(two==true) && (three==true) && (four==true)) {

        // console.log(one,two,three,four);
        // console.log(1111);
        let data = 'user=' + username + '&pwd=' + pwd;
        // console.log(data);
        p0();
                
        axios.post('http://localhost/project/registered/server/server.php?fn=add', data).then(res => {
            if (res == 1) {
                console.log('注册成功!!!');
                // location.reload();
            }
        })
    }else{
        // document.
		console.log('注册失败');
		p1();
		
		}
    }
	function p0(){
        swal("注册成功!", "去登录购物吧!!!", "success");
        // location.reload();
    }
	function p1(){
		swal("注册失败!", "请核对用户信息是否正确", "error");
}





/******表单各个验证函数******/
function checkUser(username) {
    // var reg = /^[a-zA-Z][a-zA-Z0-9]{3,8}$/;
    let reg = /^[A-Za-z]{1}[A-Za-z0-9]{3,8}/;
    if (reg.test(username) == false ) {
        // projectObj[0].className=one;
        projectObj[0].style.display = 'block';
        tipObj[0].style.display = 'none'
        // console.log('输入错误');
        one=false;
        return one;
    } 
        projectObj[0].style.display = 'none';
        tipObj[0].style.display = 'block'
        one = true;
        console.log(111);
        // console.log('输入合法');
        return one;
}
//密码验证
function checkPwd(pwd) {
    var reg = /^[a-zA-Z0-9]{4,10}$/;
    if (reg.test(pwd) == false || pwd == '') {
        // pwdId.innerHTML = "密码不能含有非法字符，长度在4-10之间";
        tipObj[1].style.display = 'none'
        projectObj[1].style.display = 'block';
        two=false;
        return two;
    }
    projectObj[1].style.display = 'none';
    tipObj[1].style.display = 'block'
    two = true;
    // console.log(222);
    return two;
}

function checkRepwd(pwd, repwd) {
    if (pwd != repwd) {
        projectObj[2].style.display = 'block';
       tipObj[2].style.display = 'none';
        three =false;
        return three;
    }
    projectObj[2].style.display = 'none';
    tipObj[2].style.display = 'block'
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
        tipObj[3].style.display = 'none'
        projectObj[3].style.display = 'block'
        four =false;
        return false;
    }
    projectObj[3].style.display = 'none';
    tipObj[3].style.display = 'block'
    four = true;
    // console.log(444);
    return four;
}

