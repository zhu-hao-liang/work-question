function debounce(fn, delay) {
    //记录上一次延时器
    let timer = null;
    return function () {
        //清除上一次定时器
        clearTimeout(timer)
        timer = setTimeout((function () {
            fn.call(this)
        }), delay)
    }

}