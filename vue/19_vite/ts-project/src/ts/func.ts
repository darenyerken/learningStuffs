//              限定参数         限定返回值  void是无返回值
function add( a:number, b:number):number {
    return a+b
}

//                               可选参数        参数默认值
// function sub( a:number, b:number, c?:number, d:number = 100):number {
//     return a-b
// }


type T = any  //类型别名
function fn( a:T):T {
    a++
}

// 定义通用函数类型
type NumFn = (n1:number,n2:number) => number

const add2:NumFn = (a,b)=> {
    return a+b
}