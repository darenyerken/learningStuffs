function B1() {
    console.log('B1')
}
export function test() {
    console.log('text --- 2.js')
}
let b = 100
export {
    B1,
    b
}