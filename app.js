var express = require('express')
var bodyParser=require('body-parser');

//引入自定义模块
var todoController = require('./controller/todoController')
var app = express()

app.set('view engine', 'ejs')
app.use('/public',express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
 
todoController(app)

app.listen(3000)