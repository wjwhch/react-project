// 用mockjs模拟生成数据
var Mock = require('mockjs');

let mr = Mock.Random;//提取mock的随机对象

//随机id和图片
let mapData = (n) => {
  var data = [];

  for (var i = 1; i <= n; i++) {

    data.push({
      id: i,
      title: "@ctitle(8,12)",
      des: "@csentence(10, 20)",
      time: "@integer(1553425967486,1553475967486)",
      content_image:mr.image('50x80',mr.color(),mr.cword(1)),
      detail:{
        auth:"@cname()",
        content:"@cparagraph(10,40)",
        auth_icon:mr.image('10x10', mr.color(), mr.cword(1))
      }
    })
  }
  return data
};

let navData = (n) => {
  var data = [];
  for (var i = 1; i <= n; i++) {
    data.push({
      id:i,
      text: "@ctitle(4,4)",
      icon:mr.image('50x50',mr.color(),mr.cword(1)),
      dataName:'navDetail'
    })
  }
  return data
};
let gridData = (n) => {
  var data = [];
  for (var i = 1; i <= n; i++) {
    data.push({
      id:i,
      text: "@ctitle(4,4)",
      title:"@ctitle(4,4)",
      dataName:'gridDetail',
    })
  }
  return data
};

//json-server 要对象||函数(返回mock后的数据)
module.exports = {
  ...Mock.mock({
    'home': mapData(32),//解决 auth_icon 不随机
    'follow': mapData(21),
    'column': mapData(11),
    'tuijian':mapData(20),
    'nav':navData(20),
    'grid':gridData(5),
    'banner|10': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        title: "@ctitle(4,8)",
        sub_title: "@ctitle(6,12)",
        banner: mr.image('750x501', mr.color(), mr.cword(4,10)),//banner不变
        time: "@integer(1553425967486,1553475967486)",
        detail:{
          icon:mr.image('20x20', mr.color(), mr.cword(1,2)),//icon不变
          auth:"@cname()",
          content:"@cparagraph(10,40)"
        }
      }
    ]
  })
};
