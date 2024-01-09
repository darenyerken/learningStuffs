function test () {
    console.log('test')
}
function test2() {
    console.log('test2')
}

// 第一种导出方式
// module.exports = {
//     test,
//     test2
// }

// 第二种导出方式
exports.test = test
exports.test2 = test2