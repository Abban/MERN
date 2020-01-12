import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcrypt';

export const MemberSchema = new Schema({
    role: {
        type: String,
        enum: ['admin', 'member'],
        default: 'member'
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    registerCode: String,
    resetCode: String,
    created: Date,
    updated: Date
});

MemberSchema.pre('save', (next) => {

    if(this.isNew) this.created = Date.now();
    this.updated = Date.now();

    if(this.isNew || this.isModified('password')) {
        this.password = bcrypt.hashSync(this.password, 8);
    }

    next();
});

export const MemberModel = new mongoose.model('Member', MemberSchema);