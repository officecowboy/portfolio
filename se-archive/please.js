window.onload = function() {

 document.getElementById('menu').addEventListener('click', function(event) {
    var targetName = event.target.tagName;

    if (targetName !== 'A' && targetName !== 'I' && targetName !== 'DIV') {
      return;
    }

   document.getElementById('responsive-menu').checked = false;
   $('html, body').css('overflow', 'auto');
  $('nav').css('bottom', 'unset');
  });
}