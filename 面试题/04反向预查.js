
// 在正则表达式中设置一个条件
// 正向预查(?= pattern) // 必须符合当前条件
let reg = /cainiao(?=8)/  // cainiao是正则  后面是条件 表示cainiao后面必须是8 条件不参与捕获
console.log(reg.exec('cainiao8'))

// 负向预查 (?! = pattern) // 必须不符合这个条件 
let reg1 = /cainiao(?!9)/ // cainiao是正则  后面是条件 表示cainiao后面必须不能是9条件不参与捕获
console.log(reg.exec('cainiao9'))



//  6-16位字符串 必须包含数字 大写字母 小写字母
let reg3 = /(?!^[0-9]+$)(?!^[a-zA-Z]+$)(?!^[0-9a-z]+$)(?!^[0-9A-Z]+$)^[0-9a-zA-Z]{6,16}$/
console.log(reg3.test('zhuhaolai1n11gZ'))
// (?![0-9]+$) 这个条件表示不能是纯数字  (?![a-zA-Z]+$)这个条件表示不能是纯字母
// (?!^[0-9a-z]+$) 不能是纯数字加小写字母   (?!^[0-9A-Z]+$) 不能是纯数字加大写字母