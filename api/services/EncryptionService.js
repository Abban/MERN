const encryption = require('bcrypt');

class EncryptionService {
    hash = async (data) => {
        try {
            const hash = await encryption.hash(data, parseInt(process.env.ENCRYPT_SALT_ROUNDS));
            return [false, hash];
        } catch (error) {
            return [error, null];
        }
    };
    matchPassword = async (password, hash) => {
        try {
            return await encryption.compare(password, hash);
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

const EncryptionServiceSingleton = new EncryptionService();

export default EncryptionServiceSingleton;