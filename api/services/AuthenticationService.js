import * as jwt from 'jsonwebtoken';

class AuthenticationService {
    generate = async (member) => {
        return await jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 2),
            data: member
        }, process.env.JWT_SECRET);
    }
}

const AuthenticationServiceSingleton = new AuthenticationService();

export default AuthenticationServiceSingleton;