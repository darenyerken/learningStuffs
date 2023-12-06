const datalist = []
export default {
    subscript(cb) {
        datalist.push(cb)
    },
    publish(value) {
        datalist.forEach(cb=>cb(value))
    }
}
//navbar订阅、tabbar发布
// navbar将修改title的函数存进datalist中
// tabbar将函数拿出来对其传参并调用
// 由此实现组件之间的通讯
// 注意全程用箭头函数，将this留在每个组件中