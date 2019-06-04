var request = require('request');
var apiOptions = {
  server: 'http://localhost:3000/api'
};

var renderDisksPage = function (req, res, responseBody) {
  res.render('list', {
    title: 'Disk Store',
    disks: responseBody
  });
};

var renderOneDiskPage = function (req, res, responseBody) {
  res.render('oneDisk', {
    title: 'Disk Store',
    disk: responseBody
  });
};

/* GET 'home' page */
module.exports.homelist = function(req, res) {
  res.render('index', {
      title: 'Disk store',
      pageHeader: {
          title: 'Store of the Disk'
      }
  });
};

/* GET 'one disk' page */
module.exports.disk = function (req, res) {
  //console.log(req);
  var path = '/disk/' + req.params.diskId;
  console.log(path);
  var requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {},
  };

  request(requestOptions, function (err, response, responseBody) {
    renderOneDiskPage(req, res, responseBody);
    console.log(responseBody);
  });
};


module.exports.diskList = function (req, res, next) {
  var path = '/';
  var requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {},
    qs: {}
  };

  request(requestOptions, function (err, response, responseBody) {
    renderDisksPage(req, res, responseBody);
    //console.log(responseBody);
  });
};
