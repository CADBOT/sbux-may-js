$(function() {
  var $tag = $('#tagOne');
  /*
  $tag.css('border', 'solid');
  $tag.css('color', 'green');
  */

  $tag.css('border', 'solid')
      .css('color', 'green');

  $.fn.greenBorder = function() {
    this.css('border', 'solid');
    this.css('color', 'green'); 
    return this;
  }

  $tag.greenBorder();
});
