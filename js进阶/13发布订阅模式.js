/* 
eventEmitter: {
    events: {
        '吃饭': [fn1, fn2, fn3]
    }
}

*/

class EventEmitter {
    constructor() {
        this.events = {}
    }
    //监听
    on(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName].push(callback)
        } else {
            this.events[eventName] = [callback]
        }
    }
    //发布
    emit(eventName) {
        this.events[eventName].forEach(fn => {
            fn()
        })
    }
    //移除
    remove(eventName, callback) {
        this.events[eventName] = this.events[eventName].filter(fn => fn !== callback)
    }
}
const e = new EventEmitter();
e.on('吃饭', function () {
    console.log('吃米饭')
})
e.on('吃饭', function () {
    console.log('吃大鱼大肉')
})
e.emit('吃饭')
console.log(e)