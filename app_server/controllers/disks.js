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
  //console.log(path);
  var requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {},
  };

  request(requestOptions, function (err, response, responseBody) {
    renderOneDiskPage(req, res, responseBody);
    //console.log(responseBody);
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


/* GET 'Add disk' page */
module.exports.addDisk = function(req, res) {
  res.render('newDisk', {
      title: 'Disk store',
      pageHeader: {
          title: 'Disk store'
      }
  });
};

/* POST 'Add disk' page */
module.exports.doAddDisk = function(req, res){
  var requestOption, path;

  var postData = {
    title: req.body.title,
    genre: req.body.genre,
    description: req.body.description,
    artist: req.body.artist,
    publisher: req.body.publisher,
    song1: req.body.song1,
    song2: req.body.song2,
    song3: req.body.song3,
    song4: req.body.song4,
    song5: req.body.song5,
    song6: req.body.song6,
    song7: req.body.song7,
    song8: req.body.song8,
    song9: req.body.song9,
    song10: req.body.song10,
    song11: req.body.song11,
    song12: req.body.song12,
    image_url: req.body.image_url
  };

  path = '/disk';
  requestOption = {
    url : apiOptions.server + path,
    method : 'POST',
    json : postData
  };

  request(requestOption, function(err,response,body){
    if (response.statusCode === 201) {
      res.redirect('/list');
    }
  });

};