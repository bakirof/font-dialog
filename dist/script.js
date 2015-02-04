$(document).ready(function () {
  var interval;

  $("#buttn").click(function () {


    $(".font").click(function () {
      var font = $('.font').val();
      $('#font').val(font);
      $('#lists').css('font-family', font);
    });

    $(".font-style").change(function () {
      var fontStyleList = $('.font-style');
      var font = fontStyleList.find(':selected').text();
      var data1 = fontStyleList.find(':selected').data('val1');
      var data2 = fontStyleList.find(':selected').data('val2');
      var data3 = fontStyleList.find(':selected').data('val3');
      var data4 = fontStyleList.find(':selected').data('val4');
      $('#font-style').val(font);

      $('#lists').css(data1,data2);
      $('#lists').css(data3,data4);
    });

    $(".font-size").click(function () {
      var fontSize = $('.font-size').val();
      $('#font-size').val(fontSize);
      $('#lists').css('font-size', fontSize+'px');

    });





  });
  $("#ok").click(function () {


    $('#myModal').hide();
  });


});
