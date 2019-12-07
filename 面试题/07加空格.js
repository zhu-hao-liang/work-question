let str = 'zhu朱hao豪liang亮'
let str1 = str.replace(/[a-zA-Z]+/g, (content) => {
    console.log(content)
    return ' ' + content + ' '
}).trim()
console.log(str1)