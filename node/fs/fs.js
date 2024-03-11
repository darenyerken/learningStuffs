const fs = require('node:fs')
const fsp = require('node:fs/promises') // promise版本的fs

// 读取test文档中的内容
// fs.readFile('./test.txt',(err, data)=> {
//     console.log(data.toString());
// })
// fsp.readFile('./test.txt').then(res=> {
//     console.log(res.toString());
// })
// 同步方式
// const text = fs.readFileSync('./test.txt')
// console.log(text.toString());

// 添加选项
// fsp.readFile('./test.txt',{
//     encoding:'utf-8',
//     flag:'r'
// }).then(data=> {
//     console.log(data);
// })
// fs.readFile('./test.txt',{encoding:'utf-8'},(err, data)=> {
//     console.log(data.toString());
// })

// --------------------readFile系列会一直等待进程读取完文件，默认返回Buffer；
// 如果需要可以使用文件流来实时返回读取结果,返回一段一段Buffer
// const readStream = fs.createReadStream('./test.txt')
// readStream.on('data',data=> {
//     console.log(data.toString());
// })
// readStream.on('close',()=> {
//     console.log('----------READ test.txt DONE----------------');
// })

// 操作文件夹
// fs.mkdir('./testMkdir/a/b',{recursive:true},()=>{}) // recursive 是否深层操作
// fs.rmSync('./testMkdir/a/b',{recursive:true})
// fs.rmSync('./testMkdir/a',{recursive:true})
// fs.rmSync('./testMkdir',{recursive:true})

//rename
// fs.renameSync('./test','xxx')

// 监听文件变化
// fs.watch('./test.txt',(event,filename)=> {
//     console.log(event, filename);
// })

// 写入 
// fs.writeFile('./test.txt','但使龙城飞将在，不教胡马度阴山',{flag:'ax'},(err,data)=> {
//     console.log(err);
//     console.log(data);
// })
// fs.writeFileSync('./test.txt','\n枯藤老树昏鸦\n小桥流水人家',{flag:'a'})

// const writeStream = fs.createWriteStream('./test.txt',{flags:'a'})

// writeStream.write('\n一寸光阴一寸金，寸金难买寸光阴')
// writeStream.on('finish',()=> {
//     console.log('写入完成');
// })
// writeStream.end()
// r系列是读，a系列是追加，w系列是重写 默认是w
// + 号表示reading+writting
// x表示新建文件，如果文件存在则不执行

// -------------------
// 硬链接  两个独立文件共享内存
// fs.linkSync('./test.txt','test2.txt')

// 软链接，相当于创建快捷方式,源文件失效则链接文件也失效
fs.symlinkSync('./test.txt','test3.txt')