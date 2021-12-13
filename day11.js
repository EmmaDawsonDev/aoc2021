// const data = `5483143223
// 2745854711
// 5264556173
// 6141336146
// 6357385478
// 4167524645
// 2176841721
// 6882881134
// 4846848554
// 5283751526`

const data = `11111
19991
19191
19991
11111`

const dataArr = data.split('\n')
const dataArr1 = dataArr.map(el => el.split(''))
for (el of dataArr1) {
  for (let i = 0; i < el.length; i++) {
    el[i] = Number(el[i])
  }
}

const numFlashes = []

for (let x = 0; x < 2; x++) {
  let coordsVisited = []
  for (let i = 0; i < dataArr1.length; i++) {
    for (let j = 0; j < dataArr1[i].length; j++) {
      dataArr1[i][j]++
    }

    for (let j = 0; j < dataArr1[i].length; j++) {
      if (dataArr1[i][j] > 9) {
        coordsVisited.push(`${i},${j}`)
        dataArr1[i][j] = 0
      }
    }
  }

  for (let k = 0; k < coordsVisited.length; k++) {
    const coords = coordsVisited[k].split(',')
    let i = +coords[0]
    let j = +coords[1]

    dataArr1[i - 1][j - 1]++
    dataArr1[i - 1][j]++
    dataArr1[i - 1][j + 1]++
    dataArr1[i][j - 1]++
    dataArr1[i][j + 1]++
    dataArr1[i + 1][j - 1]++
    dataArr1[i + 1][j]++
    dataArr1[i + 1][j + 1]++

    //console.log('check', `${i - 1},${j - 1}`, dataArr1[i - 1][j - 1], coordsVisited.includes(`${i - 1},${j - 1}`))

    const newCoordsVisited = []

    if (dataArr1[i - 1][j - 1] > 9 && !coordsVisited.includes(`${i - 1},${j - 1}`)) newCoordsVisited.push(`${i - 1},${j - 1}`)
    if (dataArr1[i - 1][j] > 9 && !coordsVisited.includes(`${i - 1},${j}`)) newCoordsVisited.push(`${i - 1},${j}`)
    if (dataArr1[i - 1][j + 1] > 9 && !coordsVisited.includes(`${i - 1},${j + 1}`)) newCoordsVisited.push(`${i - 1},${j + 1}`)
    if (dataArr1[i][j - 1] > 9 && !coordsVisited.includes(`${i},${j - 1}`)) newCoordsVisited.push(`${i},${j - 1}`)
    if (dataArr1[i][j + 1] > 9 && !coordsVisited.includes(`${i},${j + 1}`)) newCoordsVisited.push(`${i},${j + 1}`)
    if (dataArr1[i + 1][j - 1] > 9 && !coordsVisited.includes(`${i + 1},${j - 1}`)) newCoordsVisited.push(`${i + 1},${j - 1}`)
    if (dataArr1[i + 1][j] > 9 && !coordsVisited.includes(`${i + 1},${j}`)) newCoordsVisited.push(`${i + 1},${j}`)
    if (dataArr1[i + 1][j + 1] > 9 && !coordsVisited.includes(`${i + 1},${j + 1}`)) newCoordsVisited.push(`${i + 1},${j + 1}`)

    coordsVisited = [...coordsVisited, ...newCoordsVisited]
  }

  for (let el of coordsVisited) {
    const coords = el.split(',')
    let i = +coords[0]
    let j = +coords[1]
    dataArr1[i][j] = 0
  }

  numFlashes.push(coordsVisited.length)
  console.log(coordsVisited)
}

console.log(dataArr1)
console.log(numFlashes)
