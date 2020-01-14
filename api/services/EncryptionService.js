const encryption = require('bcrypt');

class EncryptionService {
    hash = async (data) => {
        try {
            const hash = await encryption.hash(data, parseInt(process.env.ENCRYPT_SALT_ROUNDS));
            return [false, hash];
        } catch (error) {
            return [error, null];
        }
    }
}

const EncryptionServiceSingleton = new EncryptionService();

export default EncryptionServiceSingleton;