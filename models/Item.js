const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({ 
    title:{
        type: String
    },
    id:{  
        type: String
    },
    image:{
        type: Object
    },
    labels:{
        type: Array
    },
    price:{
        type: String
    },
    quantity:{
        type: String
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);