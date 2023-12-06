
console.log('1.mjs被加载了')
const box = document.querySelector('.box')
console.log(box)
box.style.width = '200px'
box.style.height = '200px'
box.style.backgroundColor = 'red'
box.innerHTML = '普通用户'
console.log(import.meta)
export * as obj from './3.js'  //import 有提升
export default {
    name:'普通用户模块',
}