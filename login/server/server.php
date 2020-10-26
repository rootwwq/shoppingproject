<?php
// echo 111;
include('./mysql.php');
// 获取访问的方法名称
$fn = $_GET['fn'];
// 
$fn();

// echo $pos;

// 添加数据
function add()
{
    $user = $_POST['user'];
    $pwd = $_POST['pwd'];
    // echo $user;
    // echo $pwd;
    // $pos = $_POST['pos'];
    // echo 'add'
    //拼接sql语句,执行插入
    $sql = "insert into user values(null,'$user','$pwd')";
    // $sql = "insert into problem values(null,'$title','$pos','$idea')";
    //打印sql检验是否正常
    // echo $sql;
    $res = query($sql);
    if ($res) {
        echo 1; //表示成功
    } else {
        echo 2; //失败
    }
}
// 删除数据
// function del()
// {
//     $id = $_GET['id'];
//     $sql = "delete from problem where id = $id";
//     $res = query($sql);
//     if ($res) {
//         echo 1; //表示成功
//     } else {
//         echo 2; //失败
//     }
// }
// 查询数据
// function sel()
// {
//     $sql = 'select * from problem';
//     $res = select($sql);
//     if ($res) {
//         echo json_encode($res);
//     }
// }

function lst(){
    $sql = 'select * from user';
    $res = select($sql);
    // echo $res;
    if($res){
      echo json_encode([
        "meta"=>[
          "status"=>200,
         "msg"=>"数据获取成功"
        ],
        "data"=>$res
      ]);
    }
  }
?>
