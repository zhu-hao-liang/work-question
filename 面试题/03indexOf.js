// 实现indexOf 原理
(function () {
    // 第一种
    // const myIndexOf = function (T) {
    //     let lenT = T.length;
    //     let lenS = this.length;
    //     let res = -1;
    //     for(let i=0; i<= lenS-lenT; i++) {
    //        if(this.substr(i, lenT) === T) {
    //           res = i;
    //           break
    //        }
    //     }
    //     return res
    // }
 // 正则实现
 const myIndexOf = function(T) {
   const reg = new RegExp(T) // 变量不能使用 /T/这种形式
   res = reg.exec(this)
   return res === null ? -1 : res.index
 }



    String.prototype.myIndexOf = myIndexOf
})()
const S = 'zhuhaolaing';
const T = 'hao';
console.log(S.myIndexOf(T))
