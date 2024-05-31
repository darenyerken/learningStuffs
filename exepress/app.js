const express = require('express');  
const app = express();  
  
// 定义路由  
app.get('/tracks', (req, res) => {
    console.log(req.body);
  res.send('Hello, your API is running!');  
});  
  
app.get('/data', (req, res) => {  
  const data = {  
    message: 'This is some JSON data',  
    timestamp: new Date().toISOString()  
  };  
  res.json(data);  
});  
  
// 启动服务器  
app.listen(3002, () => {  
  console.log('Server started on port http://localhost:3002');  
});