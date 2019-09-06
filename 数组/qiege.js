 const str = 'http//baidu.com?name=zhuhaoliang&age=26&sex=0'
// const str1 = str.slice(str.indexOf('?')+1)
// console.log(str1)
// const arr = str1.split('&')
// console.log(arr)
// arr.reduce((pre, item) => {
//     pre[item.split('=')[0]] = item.split('=')[1]
//     return pre
// },{})
const test = (str) => {
   const str1 = str.slice(str.indexOf('?')+1)
   str1.split('&').reduce(() => {
       
   })

}