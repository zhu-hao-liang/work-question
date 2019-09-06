//替换作用
// let str = 'abc;123;';
// let str1 = str.replace(/;/g, '')
// console.log(str1)




//$的作用
// let str2 = '123-mm';
// let str3 = str2.replace(/(\d+)-([A-Za-z]+)/g,'$1,$2');
// console.log(str3)//  $1表示匹配第一个小括号里面的内容 123  $2表示第二个括号匹配的内容 mm

var st = "hello123hello456";

var reg = /hello/g;

var ss = st.replace(reg, function (...rest) {
    console.log(rest)
    return "world"           //（这个匿名函数有三个参数，0："world"要替换的，1：从哪开始，2："hello123hello456"  原字符串）

})

console.log(ss)    //返回的结果为：world123world456