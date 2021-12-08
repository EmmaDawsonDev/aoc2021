// const data = `3,4,3,1,2`

const data = `2,1,1,1,1,1,1,5,1,1,1,1,5,1,1,3,5,1,1,3,1,1,3,1,4,4,4,5,1,1,1,3,1,3,1,1,2,2,1,1,1,5,1,1,1,5,2,5,1,1,2,1,3,3,5,1,1,4,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,4,1,5,1,2,1,1,1,1,5,1,1,1,1,1,5,1,1,1,4,5,1,1,3,4,1,1,1,3,5,1,1,1,2,1,1,4,1,4,1,2,1,1,2,1,5,1,1,1,5,1,2,2,1,1,1,5,1,2,3,1,1,1,5,3,2,1,1,3,1,1,3,1,3,1,1,1,5,1,1,1,1,1,1,1,3,1,1,1,1,3,1,1,4,1,1,3,2,1,2,1,1,2,2,1,2,1,1,1,4,1,2,4,1,1,4,4,1,1,1,1,1,4,1,1,1,2,1,1,2,1,5,1,1,1,1,1,5,1,3,1,1,2,3,4,4,1,1,1,3,2,4,4,1,1,3,5,1,1,1,1,4,1,1,1,1,1,5,3,1,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,5,1,4,4,1,1,1,1,1,1,1,1,3,1,3,1,4,1,1,2,2,2,1,1,2,1,1`

let dataArr = data.split(',')

// for (let i = 0; i < 80; i++) {
//   let newFish = []
//   for (let j = 0; j < dataArr.length; j++) {
//     if (+dataArr[j] > 0) {
//       dataArr[j]--
//     } else {
//       dataArr[j] = 6
//       newFish.push(8)
//     }
//     // console.log(newFish)
//   }
//   dataArr = dataArr.concat(newFish)
//   // console.log(`Day${i}`, dataArr)
// }

// console.log(dataArr.length) // Part 1: 388739

// set up data obj
let dataObj = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
}

// setup initial data
for (let i = 0; i < dataArr.length; i++) {
  dataObj[dataArr[i]]++
}

for (let j = 0; j < 256; j++) {
  let temp = dataObj['0']
  dataObj['0'] = dataObj['1']
  dataObj['1'] = dataObj['2']
  dataObj['2'] = dataObj['3']
  dataObj['3'] = dataObj['4']
  dataObj['4'] = dataObj['5']
  dataObj['5'] = dataObj['6']
  dataObj['6'] = dataObj['7'] + temp
  dataObj['7'] = dataObj['8']
  dataObj['8'] = temp
}

console.log(dataObj)
console.log(Object.values(dataObj).reduce((a, b) => a + b, 0)) // Part 2: 1741362314973
