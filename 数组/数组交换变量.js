
const data=[1,2,3,4]
const beginIndex = 1;
const endIndex = 3
let tem = data[beginIndex];
for (let i = beginIndex; i < endIndex; i++) {
  data[i] = data[i + 1]
  console.log(data)
}

data[endIndex] = tem;
console.log(data)