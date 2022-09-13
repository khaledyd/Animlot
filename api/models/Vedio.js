const mongoose = require('mongoose');
const VedioSchema = new mongoose.Schema({ 
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
      },
    
    
    


    );
    module.exports = mongoose.model("Vedio", VedioSchema);