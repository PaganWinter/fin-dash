const limdu = require('limdu')

const MyWinnow = limdu.classifiers.Winnow.bind(0, {retrain_count: 10})

let intentClassifier = new limdu.classifiers.multilabel.BinaryRelevance({
  binaryClassifierType: MyWinnow
})

/*
intentClassifier.trainBatch([
  {input: {I:1,want:1,an:1,apple:1}, output: "APPLE"},
  {input: {I:1,want:1,a:1,banana:1}, output: "BANANA"},
  {input: {I:1,want:1,chips:1}, output: "CHIPS"}
]);
console.dir(intentClassifier.classify({I:1,want:1,an:1,apple:1,and:1,a:1,banana:1}));  // ['APPLE','BANANA']
*/

const XLSX = require('xlsx')
// const fs = require('fs')
// let buf = fs.readFileSync("data.xlsx")
// let wb = XLSX.read(buf, {type:'buffer'})
let wb = XLSX.readFile("data.xlsx")
let ws = wb.Sheets['traindata']
let data = XLSX.utils.sheet_to_json(ws)

let trainData = []

data.forEach((item) => {
  let tokens = item.input.split(/[ \/\-,]/g)
  // console.log(tokens)
  let inp = {}
  tokens.forEach((t) => {
    inp[t.toLowerCase()] = 1
  })

  let dat = {
    input: inp,
    output: item.category,
  }

  trainData.push(dat)
})

console.log('------------------')
console.log(trainData)
console.log('------------------')

intentClassifier.trainBatch(trainData)
console.dir(intentClassifier.classify({bookmyshow:1}))
console.log('------------------')



