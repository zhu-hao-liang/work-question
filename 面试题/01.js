// 实现 (5).add(3).minus(2)  输出结果为6
const add = function(num) {
    return this + num
}
const minus = function(num) {
      return this - num
}
// Number.prototype.add = add
// Number.prototype.minus = minus


// 优化方案
;['add', 'minus'].forEach(item => {
    Number.prototype[item] = eval(item)
})
// 链式调用说明返回的还是Number实例
console.log((5).add(3).minus(2))