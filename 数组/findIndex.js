const arr = [
    {id: 1, name: 'zs', age: 20},
    {id: 2, name: 'zs', age: 20},
    {id: 3, name: 'zs', age: 20},
]
const index = arr.findIndex(item => {
    return item.id = 1
})
console.log(index);
const arr2 = arr.splice(index,1)//splice删除数组中的一项，会改变原数组
console.log(arr);