var https = require('https');

function getAndPrintHTML () {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    response.on('data', function(data) {
      var recievedData;
      recievedData += data;
      console.log('Data Recieved:', recievedData);
    });

    response.on('end', function() {
      console.log('Response stsream complete.')
    })
  });

}

getAndPrintHTML();