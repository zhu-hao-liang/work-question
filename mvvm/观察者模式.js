/*
每一个观察者（Observer）都有一个update 方法，并且观察者的状态就是等待被触发；
每一个主题（subject）都可以通过attach方法接纳N个观察者所观察，即观察者们存储在主题的observers数组里，；
主题有初始化状态（init）、获取状态（getState）和设置状态（setState）三个通用型方法；
当主题的状态发生变化时，通过特定的notifyAllObervers方法通知所有观察者。
链接：https://juejin.im/post/5d58ca046fb9a06ad0056cc7
*/

//被观察者
class Subject {
    constructor() {
        this.state = 0;
        this.observers = []//用来存放所有的观察者实例
    }

    getState() {
        return this.state
    }

    setState(state) {
       this.state = state;
       this.notifyAllObservers()
    }

    notifyAllObservers() {
        this.observers.forEach(observer => {
            observer.update()
        })
    }

    attach(observer) {
       this.observers.push(observer)
    }
}

//每一个观察者（Observer）都有一个update 方法，并且观察者的状态就是等待被触发；
class Observer {
    constructor(name , subject) {//subject表示被观察者的一个实例
       this.name = name;
       this.subject = subject;
       this.subject.attach(this);
    }
    update() {
        console.log(`${this.name} update, state: ${this.subject.getState()}`)
    }
}

let s = new Subject();
let o1 = new Observer('o1' , s);
let o2 = new Observer('o2' , s);
let o3 = new Observer('o3' , s);

s.setState(1)
s.setState(2)
s.setState(3)

/*
o1 update, state: 1
 o2 update, state: 1
o3 update, state: 1
o1 update, state: 2
o2 update, state: 2
o3 update, state: 2
o2 update, state: 3
o3 update, state: 3
*/
