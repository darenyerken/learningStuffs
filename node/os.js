const os = require('node:os')

// console.log(os.type()) // 系统类型
// console.log(os.platform())

// console.log(os.version()) // 系统版本类型 家庭版、专业版、、、
// console.log(os.release()) // 版本号

// console.log(os.homedir()) // 获取系统用户目录

// 在浏览器打开某个地址
// const {exec} = require('child_process')
// exec('start https://www.baidu.com') // exec('当前系统的shell命令')

// console.log(os.arch()) //  cpu架构
// console.log(os.cpus()) //cpu信息
console.log(os.networkInterfaces()) // 网络信息