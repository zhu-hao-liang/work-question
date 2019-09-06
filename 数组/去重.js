const arr = [1, 1, 3, 4, 3, 5];
let newArr = [];
//foreach实现方法
// arr.forEach((item, index) => {
//     if (!newArr.includes(item)) {
//         newArr.push(item)
//     }
// })
//console.log(newArr)


 arr.reduce((pre, item) => {
     console.log(pre);
     if(!pre.includes(item)) {
        pre.push(item)
     }
      return pre
 },[])
