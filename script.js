var table = $("table")[0];
var royale = $(".royale");
var item = $(royale).find('h5')[0];
var price = $(royale).find('p')[0];
// titles
var subTotal = $('.subTotal')[0];
var subTotalInt = 0;
// var pizza = $(".pizza:has(a)");
// var ribs = $(".ribs:has(a)");
// var iceCream = $(".iceCream:has(a)");
$(royale).on('click', 'a', function (event) {
  // console.log($(price).text());
  // console.log($(item).text());

  // add to order
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
  console.log('$' + subTotalInt.toFixed(2).toString());
  $(subTotal).html();

});
// make rest of click functions

//
// $(pizza).click(function () {
//   console.log('works');
// });
//
// $(ribs).click(function () {
//   console.log('works');
// });
//
// $(iceCream).click(function () {
//   console.log('works');
// });

// make rest of click functions
