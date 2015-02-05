$(document).ready(function () {
  var sub = '';
  var obj = {};
  var out=[];

  $("#buttn").click(function () {


    $(".font").click(function () {
      var font = $('.font').val();
      $('#font').val(font);
      $('#lists').css('font-family', font);
      obj.fontFamily=font;


      sub += "<div style='margin-left:20px;'>" + "font-family: " + font + ";</div>";
    });

    $(".font-style").change(function () {
      var fontStyleList = $('.font-style');
      var font = fontStyleList.find(':selected').text();
      var data1 = fontStyleList.find(':selected').data('val1');
      var data2 = fontStyleList.find(':selected').data('val2');
      var data3 = fontStyleList.find(':selected').data('val3');
      var data4 = fontStyleList.find(':selected').data('val4');
      $('#font-style').val(font);

      $('#lists').css(data1, data2);
      $('#lists').css(data3, data4);
      obj.fontWeight=data2;
      obj.fontStyle=data4;
      sub += "<div style='margin-left:20px;'>" + "font-weight: " + data2 + ";</div>";
      sub += "<div style='margin-left:20px;'>" + "font-style: " + data4 + ";</div>";
    });

    $(".font-size").click(function () {
      var fontSize = $('.font-size').val();
      $('#font-size').val(fontSize);
      $('#lists').css('font-size', fontSize + 'px');
      obj.fontSize=fontSize;
      sub += "<div style='margin-left:20px;'>" + "font-size: " + fontSize + 'px' + ";</div>";
    });


    $('#color').change(function () {
      var color = $('#color');
      var colorCode = color.val();
      $('#lists').css('color', colorCode);
      obj.color=colorCode;
      sub += "<div style='margin-left:20px;'>" + "color: " + colorCode + ";</div>";
    });
    $("#Strikethrowgh").click(function () {
      if ($('#Strikethrowgh').prop('checked')) {
        $('#lists').css('text-decoration', 'line-through');
        obj.textDecoration='line-through';
        sub += "<div style='margin-left:20px;'>text-decoration: line-through;</div>";
      }
      else {
        $('#lists').css('text-decoration', 'none');
        obj.textDecoration='none';
        sub += "<div style='margin-left:20px;'>text-decoration: none;</div>";
      }
    });

    $("#Double-strikethrowgh").click(function () {
      if ($('#Double-strikethrowgh').prop('checked')) {
        $('#lists').css('text-decoration', 'line-through');
        $('#span').css('text-decoration', 'line-through');
      }
      else {
        $('#lists').css('text-decoration', 'none');
        $('#span').css('text-decoration', 'line-through');
      }
    });


  });

  $("#ok").click(function () {
    for (var key in obj){
      if (key=='fontFamily'){
        out += "<div style='margin-left:20px;'>" + "font-family: " + obj[key] + ";</div>";
      }
      if (key=='fontStyle'){
        out += "<div style='margin-left:20px;'>" + "font-style: " + obj[key] + ";</div>";
      }
      if (key=='fontWeight'){
        out += "<div style='margin-left:20px;'>" + "font-weight: " + obj[key] + ";</div>";
      }
      if (key=='color'){
        out += "<div style='margin-left:20px;'>" + "color: " + obj[key] + ";</div>";
      }
      if (key=='fontSize'){
        out += "<div style='margin-left:20px;'>" + "font-size: " + obj[key] + "px;</div>";
      }
      if (key=='textDecoration'){
        out += "<div style='margin-left:20px;'>" + "text-decoration: " + obj[key] + ";</div>";
      }

    }
    $('.css-list').html(out);

    out=[];
    $('#myModal').hide();
  });


});
