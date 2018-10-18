import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

//collections for MongoDB
const BillShema = new Schema({
    
    admissionDate: {
        type: Date,
        default: Date.now
    },

    typeService: {
        type: String,
        default: '',
        required: true
    },

    valor: {
        type: Number,
        default: '',
        required: true
    },

    billingDate: {
        type: String,
        default: '',
        required: true
    },

    cutoffDate: {
        type: String,
        default: '',
        required: true
    },

    paymentDate: {
        type: String,
        default: '',
        required: true
    },

    municipality: {
        type: String,
        default: '',
        required: true
    },

    point: {
        type: String,
        default: '',
        required: true
    },

    user: {
        type:Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

    /*image: {
        type: String,
        default: '',
        required: true
    }*/

    /*percentage: {
        type: String,
        default: '',
        required: true
    }*/

});

export default mongoose.model('Bill', BillShema);