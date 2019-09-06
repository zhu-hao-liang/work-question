
//被观察者
class Dep {
    constructor() {
        this.watchers = []
    }
    addWatcher(watcher) {
        this.watchers.push(watcher)
    }
    notify() {
        this.watchers.forEach((watch) => watch.update())
    }
}

//使用观察者模式将数据劫持与模板编译关联在一起，修改数据，视图改变
class Watcher {
    constructor(vm, expr, cb) {
        this.vm = vm
        this.expr = expr
        this.cb = cb
        this.oldValue = this.get()
    }
    //new Watcher时会调用get方法 从而会调用getValue方法 
    //getValue方法会进行取值，而一取值，就会调用 Object.defineProperty的get方法
    get() {
        Dep.target = this
        let value = compileUtil.getValue(this.vm, this.expr)
        Dep.target = null
        return value
    }
    update() {
        let newValue = compileUtil.getValue(this.vm, this.expr)
        if (newValue !== this.oldValue) {
            this.cb(newValue)
        }
    }
}

//数据劫持的类
class Observer {
    constructor(data) {
        console.log(data);
        this.observer(data)
    }
    observer(data) {
        //如果是对象才观察
        if (data && typeof data === 'object') {
            for (let key in data) {
                this.defineReactive(data, key, data[key])
            }
        }

    }
    defineReactive(obj, key, value) {
        if (typeof value === 'object') {
            this.observer(value)
        }

        let dep = new Dep()
        console.log(dep)
        Object.defineProperty(obj, key, {
            get: () => {
                console.log('执行get方法了')
                Dep.target && dep.addWatcher(Dep.target)
                return value
            },
            set: (newValue) => {
                //如过赋予的新值和老值一样 就没必要
                if (newValue !== value) {
                    console.log('newValue', newValue)
                    //如果赋予的新值为对象的话 还需要再次进行劫持
                    if (typeof newValue === 'object') {
                        this.observer(newValue)
                    }
                    value = newValue
                    dep.notify()
                }

            }
        })
    }
}

//基类
class MVVM {
    constructor(options = {}) {
        //将options对象中的属性挂载在this上
        this.$el = options.el
        this.$data = options.data
        this.computed = options.computed
        //在编译之前将数据this.$data做数据劫持
        new Observer(this.$data)
        console.log(this.$data)
        //通过this.xxx取值
        this.proxyVm(this.$data)
        //根元素存在,进行编译模板
        if (this.$el) {
            new Compiler(this.$el, this)
        }
    }
    proxyVm(data) {
        for (let key in data) {
             Object.defineProperty(this, key, {
                 get() {
                     return data[key]
                 }
             })
        }
    }
}
//编译模板的类
class Compiler {
    constructor(el, vm) {
        this.vm = vm
        this.el = this.isElementNode(el) ? el : document.querySelector(el)
        //console.log(this.el);
        //将 this.el 中所有的子元素放到内存中 一起渲染
        let fragment = this.node2fragment(this.el)

        //将节点中的内容进行替换,用数据编译模板
        this.compile(fragment)

        //将所有子节点节点再塞回页面
        this.el.appendChild(fragment)

    }

    //以v-开头的
    isDirective(name) {
        return name.startsWith('v-')
    }
    //编译元素的
    compileElement(node) {
        //获取当前元素属性节点
        const attributes = node.attributes;
        //console.log([...attributes]);
        [...attributes].forEach(item => {//在属性里 name对应的就是v-model value对应的就是school.name
            let { name, value: expr } = item;// v-model='school.name'
            //console.log(expr); //school.name
            //console.log(name, value);
            if (this.isDirective(name)) {//该节点是以v-开头的指令
                //console.log(node);//当前包含v-指令的节点
                let directive = name.split('-')[1]//[v, model] => model
                //需要调用不同的指令来处理

                compileUtil[directive](node, expr, this.vm)
            }
        })
    }
    //编译文本的
    compileText(node) {//{{xxx}} {{aaa}}开头的
        //获取文本节点里的内容
        const content = node.textContent;
        //console.log('文本节点里的内容', content)
        if (/\{\{(.+?)\}\}/.test(content)) {//匹配{{}} ？放在量词后面表示懒匹配
            //console.log('符合{{}}', content)
            compileUtil.text(node, content, this.vm)

        }
    }
    //编译内存中的dom节点,核心的编译方法
    compile(fragment) {
        let childNodes = fragment.childNodes//获取内存中的子节点（元素节点和文本节点）
        //console.log('编译内存中的dom节点', childNodes)
        //[text, input, text, div, text, span, text, ul, text] text指的就是文本节点(两个标签之间的空白)
        childNodes = [...childNodes]//拿到的是第一层的子节点
        childNodes.forEach(item => {
            if (this.isElementNode(item)) {//元素节点
                //编译元素的方法
                this.compileElement(item)
                //console.log('元素节点', item)


                //如果该元素节点还有子节点的话,需要递归
                this.compile(item)

            } else {//文本节点
                //编译文本节点的方法
                this.compileText(item)

                //console.log('文本节点', item)
            }
        })

    }
    //将页面上所有节点移动到文档碎片（内存）中
    node2fragment(node) {
        //创建一个文档碎片
        let fragment = document.createDocumentFragment();
        let firstChild;
        while (firstChild = node.firstChild) {
            //fragment 的appendChild方法具有移动性，每appendChild一次firstChild， 页面上就会删除当前 firstChild
            fragment.appendChild(firstChild)
        }
        console.log('fragment', fragment)
        return fragment
    }
    //判断是否为元素节点
    isElementNode(node) {
        //1.代表元素节点  2.代表属性节点  3.代表文本节点
        return node.nodeType === 1
    }
}
//编译指令的工具
compileUtil = {
    //跟据表达式获取取到vm.$data对应的数据
    getValue(vm, expr) {//[school, name]
        return expr.split('.').reduce((pre, item) => {
            return pre[item]
        }, vm.$data)
    },
    setValue(vm, expr, value) {
        return expr.split('.').reduce((pre, item, index, arr) => {
               if(index == arr.length-1) {
                return pre[item] =value
               }
            return pre[item]
        }, vm.$data)
    },
    model(node, expr, vm) {// node为当前节点input输入框 expr为school.name
        //给输入框赋予value属性 node.value = xxx
        const value = this.getValue(vm, expr)
        const fn = this.updater.modelUpdater
        //初始化时的解析数据，更新视图
        fn(node, value)
        //给输入框加一个观察者,如果稍后数据更新了，会触发此方法，拿到新值，更新视图
        new Watcher(vm, expr, (newValue) => {
            fn(node, newValue)//进行更新视图的操作
        })
        node.addEventListener('input', (e) => {
           let value = e.target.value
           this.setValue(vm, expr, value)
        })

    },
    getContentValue(vm, expr) {
        return expr.replace(/\{\{(.+?)\}\}/g, (...arg) => {
            return this.getValue(vm, arg[1])
        })
    },
    text(node, expr, vm) { //expr: {{school.name}} {{a}}
        let content = expr.replace(/\{\{(.+?)\}\}/g, (...arg) => {
            console.log(arg[1]);
            //给{{}}里面的内容加入观察者
            new Watcher(vm, arg[1], () => {
                this.updater.textUpdater(node, this.getContentValue(vm, expr))
            })
            return this.getValue(vm, arg[1])
        })
        this.updater.textUpdater(node, content)
    },
    html() {

    },
    updater: {
        modelUpdater(node, value) {
            node.value = value
        },
        //处理文本节点的
        textUpdater(node, value) {
            node.textContent = value
        }
    }
}
