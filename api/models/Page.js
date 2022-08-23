const mongoose = require('mongoose');
const PageSchema = new mongoose.Schema({ 
    pagename: {
        type: String,
        required: true,
     
      },
      catname: {
        type: Array,
        required: true,

      },
     
}
    );

    module.exports = mongoose.model("Page", PageSchema);