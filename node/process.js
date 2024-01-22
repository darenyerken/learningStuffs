// console.log(process.cwd())  // 进程文件所在目录 , esm模式下不能使用__dirname
// console.log(process.arch) // 获取系统架构

// process.env.JMETER_HOME = '1' // 可以在此进程运行环境中临时修改环境变量，不会影响系统环境变量
// console.log(process.env) // 获取系统环境变量

// console.log(process.argv) // 获取命令行参数

// console.log(process.memoryUsage()) // 获取该进程内存信息
{
    let counter = 0
    let timer = setInterval(() => {
        console.log(counter)
        counter++
        if(counter > 4) {
            clearInterval(timer)
        }
    }, 1000);
}

// // 使该进程两秒后结束
// setTimeout(function() {
//     process.exit()
// }, 2100)

// // 当进程结束时：
// process.on('exit',()=> {
//     console.log('进程结束了')
// })

// 进程两秒后被杀死
setTimeout(function() {
    process.kill( process.pid) // kill方法需要pid作为参数
}, 2100)

// kill 和 exit 的区别是，exit是进程正常退出，kill是被异常杀死