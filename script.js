var table = $("table")[0];

// food variables
var royale = $(".royale");
var pizza = $(".pizza");
var ribs = $(".ribs");
var iceCream = $(".iceCream");

// totals
var subTotal = $('.subTotal')[0];
var subTotalInt = 0;

var salesTax = 0.08845;
var tax = $('.tax')[0];
var taxInt = 0;
// l;kasdkhg;ladfknboasndf;oiagh;aksdhffksd'giadsx
var total = $('.total')[0];

$(royale).on('click', 'a', function (event) {
  $target = $(event.target);
  console.log($target.data('item'), $target.data('price'));
  let item = $(royale).find('h5')[0];
  let price = $(royale).find('p')[0];
  let row = $('<tr>');
  let element = $('<td>');
  let element2 = $('<td>');
  element.html($(item).text());
  $(row).append(element);
  element2.html($(price).text());
  $(row).append(element2);
  $(table).append(row);
  // add subtotal
  subTotalInt += parseFloat($(price).text().substring(1));
  $(subTotal).html('$' + subTotalInt.toFixed(2).toString());
  var taxInt = subTotalInt * salesTax;
  $(tax).html('$' + taxInt.toFixed(2).toString());
  $(total).html('$' + (subTotalInt + taxInt).toFixed(2).toString());
});

$(pizza).on('click', 'a', function (event) {
  let item = $(pizza).find('h5')[0];
  let price = $(pizza).find('p')[0];
  let row = $('<tr>');
  let element = $('<td>');
  let element2 = $('<td>');
  element.html($(item).text());
  $(row).append(element);
  element2.html($(price).text());
  $(row).append(element2);
  $(table).append(row);
  // add subtotal
  subTotalInt += parseFloat($(price).text().substring(1));
  $(subTotal).html('$' + subTotalInt.toFixed(2).toString());
  $(tax).html('$' + (subTotalInt * salesTax).toFixed(2).toString());
  var taxInt = subTotalInt * salesTax;
  $(tax).html('$' + taxInt.toFixed(2).toString());
  $(total).html('$' + (subTotalInt + taxInt).toFixed(2).toString());
});

$(ribs).on('click', 'a', function (event) {
  let item = $(ribs).find('h5')[0];
  let price = $(ribs).find('p')[0];
  let row = $('<tr>');
  let element = $('<td>');
  let element2 = $('<td>');
  element.html($(item).text());
  $(row).append(element);
  element2.html($(price).text());
  $(row).append(element2);
  $(table).append(row);
  // add subtotal
  subTotalInt += parseFloat($(price).text().substring(1));
  $(subTotal).html('$' + subTotalInt.toFixed(2).toString());
  $(tax).html('$' + (subTotalInt * salesTax).toFixed(2).toString());
  var taxInt = subTotalInt * salesTax;
  $(tax).html('$' + taxInt.toFixed(2).toString());
  $(total).html('$' + (subTotalInt + taxInt).toFixed(2).toString());
});

$(iceCream).on('click', 'a', function (event) {
  let item = $(iceCream).find('h5')[0];
  let price = $(iceCream).find('p')[0];
  let row = $('<tr>');
  let element = $('<td>');
  let element2 = $('<td>');
  element.html($(item).text());
  $(row).append(element);
  element2.html($(price).text());
  $(row).append(element2);
  $(table).append(row);
  // add subtotal
  subTotalInt += parseFloat($(price).text().substring(1));
  $(subTotal).html('$' + subTotalInt.toFixed(2).toString());
  $(tax).html('$' + (subTotalInt * salesTax).toFixed(2).toString());
  var taxInt = subTotalInt * salesTax;
  $(tax).html('$' + taxInt.toFixed(2).toString());
  $(total).html('$' + (subTotalInt + taxInt).toFixed(2).toString());
});
