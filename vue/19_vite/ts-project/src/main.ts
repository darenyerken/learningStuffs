import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// // TS基础学习:

// let name:string = 'bilibili'
// let price:number = 100
// let isOnline:boolean = true
// let students:string[] = ['xxx','yyy']

// // type

// import type {Course } from './types/main'
// let obj1:Course = {
//     name,
//     price,
//     isOnline,
//     students
// }

// // 接口
// interface Icourse {
//     name:string,
//     price:number,
//     isOnline:boolean,
//     students:string[],
//     discrip?:string
// }
// let obj2:Icourse = {
//     name,
//     price,
//     isOnline,
//     students,
//     discrip:'xxxx'
// }

// // 泛型
// type FnAdd = (n1:number, n2:number)=>number

// let add:FnAdd = (n1,n2) => {
//     return n1 + n2
// }

// function getProp<T,K extends keyof T>(obj:T, name:K): T[K]{
//     return obj[name]
// }

// let name1 = getProp(obj1,'name')
// console.log(name1);
