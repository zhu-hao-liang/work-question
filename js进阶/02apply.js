//思路同call
Function.prototype.myapply = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('not function')
    }
    context = context || window
    context.fn = this
    let result
    const secondParameter = [...arguments][1]
    debugger
    if (secondParameter && secondParameter instanceof Array) {
        result = context.fn(...secondParameter)
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}


const obj = {
    name: 'zs',
    test: function (a, b) {
        console.log(this.name)
        console.log(a + b)
    }
}

console.log(obj.test.myapply(obj, [1,2]))