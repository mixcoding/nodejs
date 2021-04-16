const { json } = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

const {User} = require('./models')
const {data} = require('./get_excel')


app.use(express.json())

const SECRET = '999887'

app.get('/api/users', async(req, res) => {
    const users =await User.find()
    res.send(users)
}
)

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