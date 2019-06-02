var request = require('request'); 
var apiOptions = { 
  server: 'http://localhost:3000/api'
};

var renderDisksPage = function(req, res, responseBody) { 
  res.render('index', {
    title: 'Disk Store',
    disks: responseBody 
  });

};

module.exports.diskList = function(req, res, next) { 
  var path = '/';
  var requestOptions = { 
    url: apiOptions.server + path,
    method: 'GET',
    json: {},
    qs: {}
  };

  request(requestOptions, function(err, response, responseBody) { 
    renderDisksPage(req, res, responseBody);
    // console.log(responseBody);
  });
};
