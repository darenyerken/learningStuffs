const util = require('node:util')
// console.log(util.isArray([1,2]))
// util工具类 有很多判断类型


const {exec} = require('node:child_process')
const execPromise = util.promisify(exec) // 将函数promise化
exec('node -v',(err, stdout, stderr)=> {
    console.log(stdout)
})
execPromise('node -v').then(res=> {
    console.log(res.stdout)
}).catch(res=> {
    console.log(res)
})