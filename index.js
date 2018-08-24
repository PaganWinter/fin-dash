const XLSX = require('xlsx')

let wb = XLSX.readFile('data.xlsx')
console.log(wb.SheetNames[0])

let ws = wb.Sheets[wb.SheetNames[0]]

let data = XLSX.utils.sheet_to_json(ws)

console.log(data)

$(function () {
  data.forEach((item) => {
    let $tr = $('<tr>').append(
      $('<td>').text(item.info),
      $('<td>').text(item.amount),
      $('<td>').text(item.crdr),
      $('<td>').text(item.bookDate),
      $('<td>').text(item.valueDate)
    ).appendTo('#statement-table')
  })
})
