function deepClone(obj) {
    const copy = obj instanceof Array ? [] : {}
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if(typeof obj[key] !== 'object') {
                copy[key] = obj[key]
            }else {
                copy[key] = deepClone(obj[key])
            }
            
        }
    }
    return copy
}
const obj1 = {
    name: 'zs',
    age: 18,
    sex: '男',
    dog: {
      name: '金毛',
      age: 2,
      yellow: '黄色'

    },
    test: function() {
        console.log('123')
    }
  }
console.log(deepClone(obj1))