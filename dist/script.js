$(document).ready(function () {
  var sub = '';


  $("#buttn").click(function () {


    $(".font").click(function () {
      var font = $('.font').val();
      $('#font').val(font);
      $('#lists').css('font-family', font);
      sub +="<div style='margin-left:20px;'>"+"font-family: "+font+";</div>";
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
      sub +="<div style='margin-left:20px;'>"+"font-weight: "+data2+";</div>";
      sub +="<div style='margin-left:20px;'>"+"font-style: "+data4+";</div>";
    });

    $(".font-size").click(function () {
      var fontSize = $('.font-size').val();
      $('#font-size').val(fontSize);
      $('#lists').css('font-size', fontSize+'px');
      sub +="<div style='margin-left:20px;'>"+"font-size: "+fontSize+'px'+";</div>";
    });


    $('#color').change(function(){
      var color = $('#color');
      var colorCode = color.val();
      $('#lists').css('color',colorCode);
      sub +="<div style='margin-left:20px;'>"+"color: "+colorCode+";</div>";
    });
    $("#Strikethrowgh").click(function () {
      if ($('#Strikethrowgh').prop('checked')) {
        $('#lists').css('text-decoration','line-through');
        sub +="<div style='margin-left:20px;'>text-decoration: line-through;</div>";
      }
      else{
        $('#lists').css('text-decoration','none');
        sub +="<div style='margin-left:20px;'>text-decoration: none;</div>";
      }
    });

    $("#Double-strikethrowgh").click(function () {
      if ($('#Double-strikethrowgh').prop('checked')) {
        $('#lists').css('text-decoration','line-through');
        $('#span').css('text-decoration','line-through');
      }
      else{
        $('#lists').css('text-decoration','none');
        $('#span').css('text-decoration','line-through');
      }
    });



  });
  $("#ok").click(function () {

    $('.css-list').html(sub);

    $('#myModal').hide();
  });


});
