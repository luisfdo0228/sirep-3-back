import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

//Collections for MongoDB
const UserShema = new Schema({
  
    name: {
        type: String,
        default: '',
        required: true
    },
    numberDocument: {
        type: Number,
        default: '',
        required: true
    },
    email: {
        type: String,
        default: '',
        required: true
    },
    password: {
        type: String,
        default: '',
        required: true
    },
    rol: {
        type:Schema.Types.ObjectId,
        //ref: "Rol",
        required: true
    },
    dateCreation: {
        type: Date,
        default: Date.now
    }
    
});

export default mongoose.model('User', UserShema);