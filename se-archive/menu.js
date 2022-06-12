$('input[id="responsive-menu"]').on('change',function(e) {
if ($(this).prop('checked')) {
    $('html, body').css('overflow', 'hidden');
} else {
    $('html, body').css('overflow', 'auto');
};
  if ($(this).prop('checked')) {
    $('nav').css('bottom', '0');
} else {
    $('nav').css('bottom', 'unset');
};
});