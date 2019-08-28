const str = 'name=zs;age=20;sex=1'
const arr = str.split(';')
console.log(arr)
const arr2 = arr.reduce((prev, item, index, arr) => {
    const arr1 = item.split('=')
    prev[arr1[0]] = arr1[1]
    return prev
}, {})
console.log(arr2);