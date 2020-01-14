import mongoose, {Schema} from 'mongoose';
import EncryptionService from '../services/EncryptionService';

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

MemberSchema.pre('save', async (next) => {

    if(this.isNew) this.created = Date.now();
    this.updated = Date.now();

    if(this.isNew || this.isModified('password')) {
        const hash = await EncryptionService.hash('this is the data to hash');

        if(!hash) {

        }

        /*const hash = await EncryptionService.hash(this.password, (error, hash) => {
            if(error) {
                next(error);
            } else {
                this.password = hash;
                next();
            }
        });*/
    }
});

export const MemberModel = new mongoose.model('Member', MemberSchema);