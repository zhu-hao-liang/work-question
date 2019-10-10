/* 
观察者模式：
    观察者与被观察者是相互绑定在一起的 即观察者要以数组的形式存放在被观察者里面
    被观察者也要以参数的形式传去观察者之中，即观察者与被观察者都是相互知道对方是谁的
被观察者：
    1：初始化状态
    2：保存所有的观察者
    3： 提供getState方法
    4： 提供setState方法 状态改变时 通知所有观察者，调用notifyAllObservers方法
    4： 提供attachObservers方法  用来将所有的观察者存放在一起
    4： 提供notifyAllObservers方法 用来通知每一个观察者，即调用观察者的update方法
观察者
    1: 提供一个更新状态的方法 update
    2: 形参里接收被观察者
    3： 将被观察者挂载自己的this上
    4： 调用this.subject.attachObservers方法
*/

/* 

观察者们同时监听某一个对象相应的状态变换，一旦变化则通知到所有观察者，从而触发观察者相应的事件

*/
class Subject {
    constructor() {
        this.state = 0
        this.observers = [] //存放观察者
    }
    getState() {
        return this.state
    }
    setState(state) {
        this.state = state
        this.notifyAllObservers()
    }
    attachObservers(observer) {
        this.observers.push(observer)
    }
    notifyAllObservers() {
        this.observers.forEach(observer => observer.update())
    }
}
class Observer {
    constructor(name, subject) {//subject表示被观察者 被观察者以形参形式传进来
        this.name = name
        this.subject = subject
        this.subject.attachObservers(this)
    }
    update() {
        console.log(`${this.name}说，state状态变成${this.subject.getState()}了`)
    }
}
const subject = new Subject()
//console.log(subject.toString())
const observer1 = new Observer('zs', subject)
const observer2 = new Observer('ls', subject)
const observer3 = new Observer('lm', subject)
subject.setState(1)
//console.log(observer1.toString())