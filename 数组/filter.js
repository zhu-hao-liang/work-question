const arr = [
    {id: 1, name: 'zs', age: 20},
    {id: 2, name: 'zs', age: 20},
    {id: 3, name: 'zs', age: 20},
]
const arr1 = arr.filter(item => {
    if (item.id>2) {
       return true
    }
   
})
console.log(arr1);