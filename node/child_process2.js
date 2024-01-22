// 接受父进程的传参
process.on('message',(msg)=> {
    console.log('子进程收到消息 - ', msg)
    process.exit()
})

process.send('From child process')