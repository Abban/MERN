import mongoose, {Schema} from 'mongoose';
import EncryptionService from '../services/EncryptionService';
import AuthenticationService from "../services/AuthenticationService";
import * as crypto from 'crypto';

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
    tokens: [{
        token: String
    }],
    registerCode: String,
    resetCode: String,
    created: Date,
    updated: Date
});

MemberSchema.pre('save', async (next) => {

    if (this.isNew) this.created = Date.now();
    this.updated = Date.now();

    if (this.isNew || this.isModified('password')) {
        const [error, hash] = await EncryptionService.hash(this.password);

        if (!hash) {
            next(error);
        } else {
            this.password = hash;
            next();
        }
    }
});


/**
 * Check a member's credentials are correct
 * @param email
 * @param password
 * @returns {Promise<any>}
 */
MemberSchema.methods.fetchFromLogin = async (email, password) => {
    const member = await MemberModel.findOne({email: email});

    if(!match) {
        throw new Error('Member does not exist');
    }

    const match = await EncryptionService.matchPassword(password, member.password);

    if(!match) {
        throw new Error('Member can not be authenticated');
    }

    return member;
};

/**
 * Generate an authentication token for the member
 * @returns {Promise<*>}
 */
MemberSchema.methods.authenticate = async () => {
    const token = AuthenticationService.generate(this);
    this.tokens = this.tokens.concat(token);
    await this.save();
    return token;
};

MemberSchema.methods.authCode = async (type) => {
    const code = crypto.randomBytes(6)
        .toString('hex')
        .slice(12);

    switch (type) {
        case 'register':
            this.registerCode = code;
            break;
        case 'reset':
            this.resetCode = code;
            break;
        default:
            return false;
    }

    this.save();
    return code;
};

export const MemberModel = new mongoose.model('Member', MemberSchema);