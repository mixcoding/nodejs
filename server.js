/*
 * @Author: 方小宇
 * @Date: 2021-04-06 20:53:59
 * @LastEditors: 方小宇
 * @LastEditTime: 2021-04-21 14:20:39
 * @Description: 大威天龙,宇哥出马,没有bug
 */
const { json } = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

const {User} = require('./models')
const {data} = require('./get_excel')


// 允许跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(express.json())

const SECRET = '999887'

app.get('/api/users', async(req, res) => {
    const users =await User.find()
    res.send(users)
})

app.get('/api/getExcel', async(req, res) => {
    res.send({
        data
    })
})

app.post('/api/register',async(req,res) =>{
    console.log(req.body)
    const user = await  User.create({
        username:req.body.username,
        password:req.body.password,
    })
    res.send(user)
})

const jwt = require('jsonwebtoken')

app.post('/api/login',async(req,res) =>{
    console.log(req.body)

    const user = await User.findOne({
        username:req.body.username
    })
    if(!user){
        return res.status(422).send({
            message:'用户不存在'
        })
    }
    const isPasswordValid = require('bcrypt').
    compareSync(req.body.password,user.password)
    if(!isPasswordValid){
        return res.status(422).send({
            message:'密码错误'
        })
    }
    const token = jwt.sign({
        id: String(user._id),
    },SECRET)
    res.send({
        user,
        token
    })
})
// 提取出验证部分
const auth = async(req,res,next) => {
    console.log(req.headers.authorization)
    const raw = String(req.headers.authorization).split(' ').pop()
    const {id} = jwt.verify(raw,SECRET)
    req.user = await User.findById(id)
    next()
}

app.get('/api/profile',auth,async(req,res) => {
    res.send(req.user)
})


app.listen(port, () => console.log(`点击  http://localhost:3000`))