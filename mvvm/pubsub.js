class Sub {
    constructor() {
        this.state = 1 //初始化状态
        this.observers = []
    }
    getState() {
      return this.state
    }
    setState(state) {
      this.state = state
      this.notifyAllObservrs()
    }
    attachObserver(observer) {
        this.observers.push(observer)
    }
    notifyAllObservrs() {
        this.observers.forEach(item => {
            item.update()
        })
    }
}
class Observer {
    constructor(name, sub) {
        this.name = name
        this.sub = sub
        this.sub.attachObserver(this)
    }
    update() {
        console.log(`${this.name} update, state: ${this.sub.getState()}`)
    }

}
const sub1 = new Sub();
const Observer1 = new Observer('zs', sub1)
const Observer2 = new Observer('zs1', sub1)
const Observer3 = new Observer('zs2', sub1)
sub1.setState(2)
sub1.setState(3)
sub1.setState(4)