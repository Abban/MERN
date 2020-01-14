import {MemberModel} from '../models/Member';

export default (app) => {

    app.post('/v1/authentication/login', async (request, response) => {
        const email = request.body.email;
        const password = request.body.password;

        const member = await MemberModel.findOne({
            email: email,
            
        });
        // request.session
    });


    app.get('/v1/authentication/logout', async (request, response) => {

    });

}