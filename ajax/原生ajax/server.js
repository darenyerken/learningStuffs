// 1.引入express
const express = require('express')
// 2.创建应用对象
const app = express()
// 3.创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.get('/server',(request,response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    //设置响应体
    const obj = {
        name:'kerwinnn'
    }
    response.send(JSON.stringify(obj))
})
app.all('/server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    // response.setHeader('Access-Control-Allow-Headers','*')
    response.send('HELLO AJAX-POST')
})
app.get('/ie',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.send('HELLO IE')
})
app.get('/delay',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    setTimeout(function(){
        response.send('网络延时')
    },3000)
})
app.all('/axios',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    response.send('HELLO AXIOS')
    console.log('server ok')
})
app.all('/fetch',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    response.send(JSON.stringify({name:'nothing'}))
    console.log('server ok')
})


// 4.监听端口启动服务
app.listen(8000,()=>{
    console.log('服务器已启动，8000 端口监听中....')
})