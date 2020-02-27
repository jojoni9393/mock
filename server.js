var Mock = require('mockjs')

module.exports = () => {
  var data = Mock.mock({
    //对象名称 | 数组长度为10
    'list|10': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1000,
        title: '@ctitle(4)',
        subTitle: '@ctitle(5,10)',
        name: '@cname',
        // 1-6,随机
        'categoryId|1-6': 1,
        url: 'https://www.baidu.com/',
        image: 'https://iph.href.lu/200x200',
        'boolean|1': true,
        time: new Date().getTime(),
        //数组长多控制在3-10
        'child|3-10': [
          {
            'id|+1': 1000,
            title: '@ctitle(4)',
            subTitle: '@ctitle(5,10)',
            name: '@cname'
          }
        ]
      }
    ]
  })
  // 返回的data会作为json-server的数据
  return data
}
