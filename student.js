var yesRadio = $('#yes'),
    noRadio = $('#no');

yesRadio.click(function () {
  if($('#collapseOne').hasClass('in')) {
    return false;
  }
});

noRadio.click(function () {
  if(!$('#collapseOne').hasClass('in')) {
    return false;
  }
});



