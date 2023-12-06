console.log('2.js被加载了');
const box = document.querySelector('.box')
console.log(box)
box.style.width = '200px'
box.style.height = '200px'
box.style.backgroundColor = 'blue'
box.innerHTML = '管理员上线'
export default {
    name:'管理员模块'
}