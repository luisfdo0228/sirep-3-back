import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

//collections for MongoDB
const TypeServiceShema = new Schema({
    
    typeService: {
        type: String,
        default: '',
        required: true
    },

    description: {
        type: String,
        default: '',
        required: true
    },

    dateCreation: {
        type: Date,
        default: Date.now
    }

});

export default mongoose.model('TypeService', TypeServiceShema);