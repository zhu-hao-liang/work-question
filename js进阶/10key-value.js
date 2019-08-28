 //将一个对象转化为 name=zs&age=123&gender=%E7%94%B7形式
 function param (data) {
    let url = ''
    for (var key in data) {
      let value = data[key] !== undefined ? data[key] : ''
      url += '&' + key + '=' + encodeURIComponent(value)
    }
    return url ? url.slice(1) : ''
  }
  var res = param({name: 'zs', age: '123',gender: '男'})
  console.log(res)