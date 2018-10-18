import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

//collections for MongoDB
const RolShema = new Schema({
    
    nameRol: {
        type: String,
        default: '',
        required: true
    },

    descriptionRol: {
        type: String,
        default: '',
        required: true
    },

    dateCreation: {
        type: Date,
        default: Date.now
    }

});

export default mongoose.model('Rol', RolShema);