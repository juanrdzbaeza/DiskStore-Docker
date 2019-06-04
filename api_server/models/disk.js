var mongoose = require('mongoose');

var songsSchema = new mongoose.Schema({
  A: {
    type: [String]
  },
  B: {
    type: [String]
  }
})

var diskSchema = mongoose.Schema({
  title :{
    type: String,
    required: true
  },
	genre :{
    type: String,
    required: true
  },
	description :{
    type: String
  },
	artist :{
    type: String,
    required: true
  },
	publisher :{
    type: String
  },
  songs : {
    type: songsSchema,
  },
  image_url: {
    type: String
  }
})

mongoose.model('Disk', diskSchema);