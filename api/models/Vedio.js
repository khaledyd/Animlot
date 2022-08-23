const mongoose = require('mongoose');
const VedioSchema = new mongoose.Schema({ 
    keyword: {
        type: String,
        required: true,
     
      },
      type: {
        type: String,
        required: true,

      },
      vedio: {
        type: String,
        

      },
      email: {
        type: String,
        required: true,
        

      },
    
    
    

}
    );
    module.exports = mongoose.model("Vedio", VedioSchema);