const arr = [
    {id: 1, name: 'zs', age: 20},
    {id: 2, name: 'ls', age: 20},
    {id: 3, name: '123', age: 20},
]
/*
 reduce是一个进行累计的方法的  第二个参数指定pre的初始值  
*/
 const arr1 = arr.reduce((pre, item) => {
      pre.push(item.id)
      return pre
 },[])
 console.log(arr1)

 const obj = arr.reduce(((pre, item) => {
      pre[item.id] = item.name
      return pre
 }),{})
 console.log(obj)