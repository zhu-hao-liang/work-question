// 组件通信，一个触发与监听的过程
// class EventEmitter {
//     constructor () {
//       // 存储事件
//       this.events = this.events || new Map()
//     }
//     // 监听事件
//     addListener (type, fn) {
//       if (!this.events.get(type)) {
//         this.events.set(type, fn)
//       }
//     }
//     // 触发事件
//     emit (type) {
//       let handle = this.events.get(type)
//       handle.apply(this, [...arguments].slice(1))
//     }
//   }
  
//   // 测试
//   let emitter = new EventEmitter()
//   // 监听事件
//   emitter.addListener('ages', age => {
//     console.log(age)
//   })
//   // 触发事件
//   emitter.emit('ages', 18)  // 18
  //new Map()一种新的数据对象


  // 组件通信，一个触发与监听的过程
 class EventEmitter {
  constructor() {
    this.events =  {}
  }
  //发布者
  emitter(type) {//在触发事件里调用监听者的方法（监听者的形参）
   debugger
   const handleEvent = this.events.type
   handleEvent.apply(this, [...arguments].slice(1))
  }
  //监听者
  addListeners(type, fn) {
    console.log(this.events.type)
   if(!this.events.type) {//加这个标识符是为了仅仅挂载第一次的type 因为第二次 第三次的type的方法都是一样的 没有必要在重新覆盖
     this.events.type = fn
   }
  }
}
const eventEmitter1 = new EventEmitter();
console.log(eventEmitter1)
//首先确定监听事件
eventEmitter1.addListeners('age',age =>console.log(age))
eventEmitter1.addListeners('name',name =>console.log(name))
//然后绑定事件
eventEmitter1.emitter('age',10)
eventEmitter1.emitter('name','zs')
