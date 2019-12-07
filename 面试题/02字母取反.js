// 将出现的字母取反 大写变小写， 小写变大写如 AbC => aBc
const str = '哈哈ZhuHaoLiang哈哈';
const str1 = str.replace(/[a-zA-Z]/g, (content) => {
    console.log(content)
    // 思路 把大写字母转换大写后和当前相比 相等的话说明当前字母就是大写，就转成小写
    return content.toUpperCase() === content ? content.toLowerCase() : content.toUpperCase()
})
console.log(str1)