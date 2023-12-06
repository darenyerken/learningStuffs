
// 接口
interface InterObj {
    name:string,
    age:number,
    location?:string,  //可选属性
    [propname:string]:any  //可拓展
}

let myobj:InterObj = {
    name:'kerwin',
    age:100,
    a:1,
    b:'bbb'
}

// 类型别名 
type Obj = {
    name:string,
    age:number,
    location?:string,  //可选属性
    [propname:string]:any  //可拓展
}

let myobj2:Obj = {
    name:'kerwin',
    age:100,
    a:1,
    b:'bbb'
}


// 泛型
class Student<T> {
    name:T
    constructor(name:T) {
        this.name = name
    }
}

const s = new Student(123)

// 接口和类型 的区别
// interface（接口）和 type（类型别名）的对比：

// 相同点：都可以给对象指定类型
// 不同点:
// 接口，只能为对象指定类型。它可以继承。
// 类型别名，不仅可以为对象指定类型，实际上可以为任意类型指定别名

// 先有的 interface，后有的 type,推荐使用 type
