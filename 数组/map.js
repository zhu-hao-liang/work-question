const arr = [
    {id: 1, name: 'zs', age: 20},
    {id: 2, name: 'ls', age: 20},
    {id: 3, name: '123', age: 20},
]
 const arr1 = arr
 .map(item => ({"handleName": item.name}))
console.log(arr1)  