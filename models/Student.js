import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 6
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    }
}, { timestamps: true, versionKey: false });

export default mongoose.model('Student', studentSchema);