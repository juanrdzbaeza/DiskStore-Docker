var mongoose = require('mongoose');
var diskSchema = require('../models/disk');
var Disk = mongoose.model('Disk');

/**
 * noseusa
 */
module.exports.diskFindOne = function (req, res) {
  Disk
    .findOne()
    .exec(
      function (err, disk) {
        return res
          .status(200)
          .send(disk);
      }
    )
}

/**
 * devuelve todos los discos
 */
module.exports.diskFindAll = function (req, res) {
  Disk
    .find({})
    .exec(
      function (err, allTheDisk) {
        if (!allTheDisk) {
          return res
            .status(404)
            .send({ "message": "disks not fouds" });
        }
        return res
          .status(200)
          .send(allTheDisk);
      }
    )
}


/**
 * encuentra por id
 */
module.exports.diskFindById = function (req, res) {
  if (req.params && req.params.id) {
    Disk
      .findById(req.params.id)
      .exec(
        function (err, disk) {
          if (!disk) {
            return res
              .status(404)
              .send({ "message": "disk not found" });
          } else if (err) {
            return res
              .status(404)
              .send(err);
          }
          return res
            .status(200)
            .send(disk);
        }
      );
  } else {
    return res
      .status(404)
      .send({ "message": "No disk in the request" });
  }
};

/**
 * crear un disco
 */
module.exports.diskCreate = function (req, res) {
  var sideA = [];
  var sideB = [];
  console.log(req);

  /* Side A Songs */
  if (req.body.song1){
    sideA.push(req.body.song1);
  }
  if (req.body.song2){
    sideA.push(req.body.song2);
  }
  if (req.body.song3){
    sideA.push(req.body.song3);
  }
  if (req.body.song4){
    sideA.push(req.body.song4);
  }
  if (req.body.song5){
    sideA.push(req.body.song5);
  }
  if (req.body.song6){
    sideA.push(req.body.song6);
  }
  /* Side B Songs  creo que la cancion si existe pero es cadena vacia*/
  if (req.body.song7){
    sideB.push(req.body.song7);
  }
  if (req.body.song8){
    sideB.push(req.body.song8);
  }
  if (req.body.song9){
    sideB.push(req.body.song9);
  }
  if (req.body.song10){
    sideB.push(req.body.song10);
  }
  if (req.body.song11){
    sideB.push(req.body.song11);
  }
  if (req.body.song12){
    sideB.push(req.body.song12);
  }
  
  var songs = {
    'sideA': sideA,
    'sideB': sideB
  };
  
  Disk
    .create({
      title: req.body.title,
      genre: req.body.genre,
      description: req.body.description,
      artist: req.body.artist,
      publisher: req.body.publisher,
      songs: songs,
      image_url: req.body.image_url
    }, function (err, disk) {
      if (err) {
        return res
          .status(400)
          .send(err);
      }
      return res
        .status(201)
        .send(disk);
    });
};

/**
 * eliminar un disco
 */
module.exports.diskDelete = function (req, res) {
  if (req.params && req.params.id) {
    Disk
      .findByIdAndDelete(req.params.id)
      .exec(
        function (err, disk) {
          if (err) {
            return res
              .status(400)
              .send(err);
          }
          return res
            .status(204)
            .send(null);
        }
      );
  } else {
    return res
      .status(404)
      .send({ "message": "No id in the request" });
  }
};

/**
 * actualizar un disco
 * el actualizar tiene cacaruca, hay que 
 * mirar el tema de las canciones
 */
module.exports.diskUpdate = function (req, res) {
  if (req.params && req.params.id) {
    Disk
      .findById(req.params.id)
      .exec(
        function (err, disk) {
          if (!disk) {
            return res
              .status(404)
              .send({ "message": "no disk found" });
          } else {
            if (req.body.title) {
              disk.title = req.body.title;
            }
            if (req.body.genre) {
              disk.genre = req.body.genre;
            }
            if (req.body.description) {
              disk.description = req.body.description;
            }
            if (req.body.author) {
              disk.author = req.body.author;
            }
            if (req.body.publisher) {
              disk.publisher = req.body.publisher;
            }
            if (req.body.pages) {
              disk.pages = req.body.pages;
            }
            if (req.body.image_url) {
              disk.image_url = req.body.image_url;
            }
            disk.save(function (err, disk) {
              if (err) {
                return res
                  .status(404)
                  .send(err);
              }
              else {
                return res
                  .status(200)
                  .send(disk);
              }
            });
          }
        }
      );
  } else {
    return res
      .status(404)
      .send({ "message": "No id in the request" });
  }
};



