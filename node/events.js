const eventEmitter  = require('node:events')

// 事件需要实例化
const bus = new eventEmitter()

const fn = ()=> {
    console.log('node jump!!!')
}



// bus.on('jump',fn) // 订阅一个事件
// bus.off('jump', fn)  // 取消订阅事件
// bus.once('jump',fn)  // 订阅一个一次性事件

// 每个进程默认只能订阅10个事件,但这个可以设置
console.log(bus.getMaxListeners())
bus.setMaxListeners(20)
console.log(bus.getMaxListeners())

bus.on('jump',fn) 
bus.on('jump',fn) 
bus.on('jump',fn) 
bus.on('jump',fn) 
bus.on('jump',fn) 
bus.on('jump',fn) 
bus.on('jump',fn) 
bus.on('jump',fn) 
bus.on('jump',fn) 
bus.on('jump',fn) 
bus.on('jump',fn) 
bus.on('jump',fn) 
bus.on('jump',fn) 


// bus.emit('jump') // 发布一个事件

// process也可以发布订阅事件
// 因为eventEmitter的原型已经嫁接到process上了
function fn2(){}
function fn3(){}
const a = new fn2()
const b = new fn3()
fn2.prototype.x = 1
fn3.prototype.x = 2
console.log(a.x)
console.log(b.x)

Object.setPrototypeOf(a, b) // 将a的原型链设置为b
console.log(a.__proto__ === b)

console.log(a.x)
console.log(b.x)

process.on('jump',fn)
process.emit('jump')