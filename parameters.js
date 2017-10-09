var https = require('https');


function getAndPrintHTML (options) {
  
  https.get(options, function (response) {
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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);