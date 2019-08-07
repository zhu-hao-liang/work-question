//第一步
// class Promise {
//     constructor(executor) {
//         //参数校验
//         if (typeof executor !== 'function') {
//             throw new TypeError('not function')
//         }
//         //定义executor函数的两个参数
//         const resolve = () => {

//         }
//         const reject = () => {

//         }
//         //将resolve函数 reject函数作为实参 
//         executor(resolve, reject)

//     }
// }

//第二部
// class Promise {
//     constructor(executor) {
//         //参数校验
//         if (typeof executor !== 'function') {
//             throw new TypeError('not function')
//         }
//         //初始化数据
//         this.value = null //完成之后的值
//         this.err = null //失败的值
//         this.state = 'pending' // 初始化状态
//         //定义executor函数的两个参数
//         const resolve = (value) => {
//             //成功后的一些列操作
//             if (this.state === 'pending') {
//                 this.state = 'fulfilled'
//                 this.value = value
//             }
//         }
//         const reject = (err) => {
//             //失败后的一些列操作
//             if (this.state === 'pending') {
//                 this.state = 'rejected'
//                 this.err = err
//             }
//         }
//         //将resolve函数 reject函数作为实参 
//         executor(resolve, reject)

//     }
// }
//将第二部进行优化
class Promise {
    constructor(executor) {
        //参数校验
        if (typeof executor !== 'function') {
            throw new TypeError('not function')
        }
        //初始化数据
        this.initValue()
        //更改this指向
        this.initThis()
        //将resolve函数 reject函数作为实参 
        executor(this.resolve, this.reject)
    }
    //初始化数据
    initValue() {
        this.value = null //完成之后的值
        this.err = null //失败的值
        this.state = 'pending' // 初始化状态
    }
    //更改this的指向
    initThis() {
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }
    resolve(value) {
        //console.log(this)
        //成功后的一些列操作
        if (this.state === 'pending') {
            this.state = 'fulfilled'
            this.value = value
        }
    }
    reject(err) {
        //失败后的一些列操作
        if (this.state === 'pending') {
            this.state = 'rejected'
            this.err = err
        }
    }
    then(onFulfilled, onRejected) {
        // 状态为fulfilled，执行onFulfilled，传入成功的值
        if (this.state === 'fulfilled') {
            onFulfilled(this.value);
        }
        // 状态为rejected，执行onRejected，传入失败的原因
        if (this.state === 'rejected') {
            onRejected(this.reason);
        }
    }

}
module.exports = Promise