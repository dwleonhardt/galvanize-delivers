var table = $("table")[0];

var menu = $('.menu')[0];

// totals
var subTotal = $('.subTotal')[0];
var subTotalInt = 0;

var salesTax = 0.08845;
var tax = $('.tax')[0];
var taxInt = 0;
var total = $('.total')[0];

$(menu).on('click', 'a', function (event) {
  $target = $(event.target);
  let item = $target.data('item');
  let row = $('<tr>');
  let element = $('<td>');
  let element2 = $('<td>');
  element.html($target.data('item'));
  $(row).append(element);
  element2.html($target.data('price'));
  $(row).append(element2);
  $(table).append(row);
  subTotalInt += $target.data('price');
  $(subTotal).html('$' + $target.data('price').toFixed(2).toString());
  var taxInt = subTotalInt * salesTax;
  $(tax).html('$' + taxInt.toFixed(2).toString());
  $(total).html('$' + (subTotalInt + taxInt).toFixed(2).toString());
});

// form validation
var submit = $('#submitButton')[0];
var $deliveryForm = $('#delivery');
var $phone = $('#icon_telephone.validate');

// $('#myform').submit(function() {
    // DO STUFF...
//     return true; // return false to cancel form action
// });



$deliveryForm.submit(function(event) {
  event.preventDefault();
  console.log($('.valid'));
  if ($('.valid').length > 2) {
    Materialize.toast('Thank you for your order!', 4000);
  } 
});
