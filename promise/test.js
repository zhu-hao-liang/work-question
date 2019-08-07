const Promise = require('./promise')
new Promise((resolve, reject) => {
    console.log('基础promise开始啦')
    resolve(1)
}).then(res => console.log(res))