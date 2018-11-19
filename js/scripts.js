$(function(){


  console.log('scripts loaded');

  var t = setInterval(refresh, 5000);// refresh location every 5 seconds
  function refresh(){

      var url = 'http://api.open-notify.org/iss-now.json';
      var url2 = '';
      var urlArray = [url, url2];
      var iss_position = '';
      var html = '';
      var lat = '';
      var lon = '';

      for (i= 0; i < urlArray.length; i ++){ // make ajax request for each url

      $.ajax({
        type: 'GET',
        url: urlArray[i],
        dataType: 'json',
        async: true,
        data: iss_position,
        success: function(iss_position){
          console.log(iss_position);

          var lat = iss_position.iss_position.latitude;
          var lon = iss_position.iss_position.longitude;

          var url2 = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat='+ lat + 'lon=' + lon;

          html += '<a href="' + url2 + '">' + url2 + '</a>';
          html += '<p>The ISS is at these coordinates:<br>';
          html += 'latitude:' + lat + '<br>';
          html += 'longitude:' + lon + '<br>';
          html += '</p>';

          $('#position').html(html);
        } //close success

        }); //close ajax 1
      } // close for loop

                //$.ajax({
                //  type: 'GET',
                //  url: url2,
                //  dataType: 'json',
                //  async: true,
                //  data: error,
                //  success: function(error){
                //    console.log(error);
              //
                //    html += error;
              //
                //    $('#name').html(html);
                //  }
              //
              //  }); //close ajax 2

  } //close refresh

}); //close function wrapper
