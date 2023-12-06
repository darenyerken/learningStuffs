
let list = ['kerwin',100]
console.log(list);
// list.push(true)

// 数组里面放string或者number
let list2:(string|number)[] = ['kerwin',100]
// 纯数字数组或者纯字符串数组
// let d:string[]|number[] = [100,'kerwin']  报错

let lsit3:Array<string> = ['ronaldo']

let list4:any[] = ['kerwin',100]


// 元组是一种特殊的数组。有两点特殊之处
// 它约定了的元素个数
// 它约定了特定索引对应的数据类型
let x:[string,number]
x = ['kerwin',100]