const path = require('node:path')
// console.log(path.basename('D:\\a\\b\\c.html'))  //获取文件全名
// console.log(path.basename('D:/a/b/c.html'))
// console.log(path.dirname('D:\\a\\b\\c.html'))  //获取文件目录
// console.log(path.dirname('D:/a/b/c.html'))
// console.log(path.extname('a/index.js'))
// console.log(__filename)
// console.log(__dirname)


// console.log(path.win32.join('D:','b','c','a')) // 连接地址
// console.log(path.posix.join('D:','b','c','a'))


// path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。
// 给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径。 
// 例如，给定的路径片段的序列为：/foo、/bar、baz，则调用 path.resolve('/foo', '/bar', 'baz') 会返回 /bar/baz。
// console.log(path.resolve('D:\\a\\b\\c.html')) // 解析地址
// console.log(path.resolve()) // 如果为空返回当前目录
// console.log(path.resolve('a\\b\\c')) //当前目录+实参地址
// console.log(path.resolve('a\\b\\c','d')) //当前目录+实参地址串联
// console.log(path.resolve('c:','a\\b\\c','d')) //实参地址串联
// 常用：path.resolve(__dirname,'index.js')

// console.log(path.relative('a/b/c/d','a/b/e/d')) // 从左到右对比两个地址，从不同之处开始返回 to实参中的不同部分
// console.log(path.relative('w/b/c/d','a/b/e/d'))

// const path1 = path.parse('D:\\a\\b\\c.html')
// console.log(path1)
// const path2 = {
//     root:'c:',
//     dir:'c:/a/b/c',
//     ext:'.js',
//     name:'d'
// }
// console.log(path.posix.format(path2))

console.log(path.sep) // 返回当前系统的文件地址分隔符 注意：反斜杠要double