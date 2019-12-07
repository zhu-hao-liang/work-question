let obj = {
    1: '1000',
    3: '5000',
    6: '4098'
}

let arr = new Array(12).fill(null);
// map 方法 返回值会组成一个新对象
let arr1 = arr.map((item, index) => {
   return obj[index + 1] ? obj[index + 1] : null
})
console.log(arr1)