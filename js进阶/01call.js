//将要改变this的函数 挂载到目标this上执行  并返回
//  Function.prototype.mycall = function(context) {
//     if (typeof this !== 'function') {
//         throw new TypeError('not function')
//     }
//     context = context || window
//     context.fn = this
//     const arg = [...arguments].slice(1)
//     const result = context.fn(...arg)
//     delete context.fn //不要忘了清除
//     return result
// }
// const obj = {
//     name: 'zs',
//     test: function(a, b) {
//         console.log(this.name)
//         console.log(a + b)
//     }
// }
// obj.test.mycall(obj, 1, 2)
// 将要改变this的函数挂载到目标this上
Function.prototype.mycall = function(ctx) {
    if(typeof this !== 'function') {
        throw new TypeError('not function')
    }
    ctx = ctx || window
    ctx.fn = this
    const arg = [...arguments].slice(1)
    const result = ctx.fn(...arg)
    delete ctx.fn
    return result
}
const obj = {
    name: 'zs',
    test: function (a, b) {
        console.log(this.name)
        console.log(a + b)
    }
}
obj.test.mycall(obj, 1, 2)