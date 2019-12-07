const arr = [
    {id: 1, name: 'zs', age: 20},
    {id: 2, name: 'ls', age: 20},
    {id: 3, name: '123', age: 20},
]
/*
 reduce是一个进行累计的方法的  pre 表示上一次回调函数执行时的返回值，第二个参数指定pre的初始值  
*/
 const arr1 = arr.reduce((pre, item) => {
      pre.push(item.id)
      //return pre.push(item.id)  //prev 表示当前函数上一次的返回值 ，pre.push(item.id)的返回值是数组长度，所以会报错
      return pre
 },[])
 console.log(arr1)

 const obj = arr.reduce(((pre, item) => {
      pre[item.id] = item.name
      return pre
 }),{})
 console.log(obj)