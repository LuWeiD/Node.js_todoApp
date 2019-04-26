var data = [
  { name: 'aaa' },
  { name: 'bbb' },
  { name: 'ccc' }
]
var bodyParser = require('body-parser')//对数据进行解析
var urlencodeParser = bodyParser.urlencoded({ extended: false })
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
module.exports = function (app) {
  //获取数据:返回的是具体的页面
  app.get('/todo',function (req,res) {
      res.render('todo', { todos: data })
  })
  //传递数据
  app.post('/todo', multipartMiddleware, function (req, res) {
      console.log(req.body)
      data.push(req.body)
      res.render('todo', { todos: data })
      console.log(data)
  })
  //删除数据
  app.delete('/todo', multipartMiddleware, function (req, res) {
      for (var i = 0; i<data.length; i++) {
        if(data[i].name === req.body.name) {
          data.splice(i,1)
          break
        }
      }
      console.log(data)
      res.send(req.body)
  })
}