const XLSX = require('xlsx')

let wb = XLSX.readFile('data.xlsx')
console.log(wb.SheetNames[0])

// let ws = wb.Sheets[wb.SheetNames[0]]
let ws = wb.Sheets['statement']

let data = XLSX.utils.sheet_to_json(ws)

console.log(data)

$(function () {
  $table = $('#statement-table')
  let $tr = $('<tr>').append(
    $('<th>').addClass('info').text('Info'),
    $('<th>').addClass('amount').text('Amount'),
    $('<th>').addClass('crdr').text('CrDr'),
    $('<th>').addClass('book-date').text('Book Date'),
    $('<th>').addClass('value-date').text('Value Date')
  ).appendTo($table)

  data.reverse().forEach((item) => {
    let $tr = $('<tr>').append(
      $('<td>').addClass('info').text(item.info),
      $('<td>').addClass('amount').text(item.amount),
      $('<td>').addClass('crdr').text(item.crdr),
      $('<td>').addClass('book-date').text(item.bookDate),
      $('<td>').addClass('value-date').text(item.valueDate)
    ).appendTo($table)
  })
})
