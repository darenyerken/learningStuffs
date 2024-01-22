// 子进程APIs

const {exec, execSync, spawn, spawnSync, execFile, execFileSync, fork} = require('node:child_process')
// exec 异步执行shell命令，返回Buffer（等待命令执行结束后返回结果） 限制200kb大小
// execSync 同步
// spawn  异步执行shell命令， 返回流（shell返回一个结果就立即返回，知道返回所有结果）  不限制大小
// spawnSync 同步
// execFile 异步执行可执行文件 例如xxx.sh,不像exec一样会生成shell，所以效率更高
// execFileSync 同步
// fork 异步执行js文件 ， 其底层是libuv实现

// exec('start chrome https://www.baidu.com/s?wd=钢铁是怎样炼成的') 
// err 是失败信息， stdout是标准输出流， stderr是失败输出流 ; exec第三个参数写配置
// exec('node -v',(err,stdout,stderr)=> { //c传参的华直接写字符串里面
//     console.log(stdout.toString())
// },{
//     cwd:__dirname,
//     encoding:'utf-8'
// })

// const nodeVersion = execSync('node -v')
// console.log(nodeVersion.toString())

// const netstat = execSync('netstat') 
// console.log(netstat)
// const {stdout} = spawn('netstat',{
//     cwd:__dirname,
//     encoding:'utf-8'
// }) // 传参spawn('命令',['-a','-b',...])
// stdout.on('data',(msg)=>{
//     console.log(msg.toString())
// })
// stdout.on('close',()=> {
//     console.log('结束了')
// })

// 运行 bat.cmd文件
// const path = require('node:path')
// execFile(path.resolve(__dirname,'./bat.cmd'),null,(err, stdout)=>{
//     console.log(stdout)
// })

// --------------------------------------exec靠execFile实现，execFile靠spawn实现

const child = fork('child_process2.js')
child.send('From father process')
child.on('message',(fromChild)=> {
    console.log('父进程收到消息 - ',fromChild)
})
child.on('close',()=> {
    console.log('子进程结束')
})