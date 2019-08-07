new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    },1000)
  }).then(value => {
      console.log('value', value)
  }, err => {
      console.log('err', err)
  })