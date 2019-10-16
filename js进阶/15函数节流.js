function throttle(fn, delay) {
    //记录上一次函数触发时间
    let lastTime = null;
    return function () {
        //记录当前函数触发时间
        let nowTime = Date.now();
        if (nowTime - lastTime > delay) {
            fn.call(this)
            //同步时间
            lastTime = nowTime
        }

    }

}