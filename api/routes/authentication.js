import {MemberModel} from '../models/Member';
import EmailService from "../services/EmailService";

export default (app) => {

    app.post('/v1/authentication/login', async (request, response) => {
        const email = request.body.email;
        const password = request.body.password;

        const member = await MemberModel.fetchFromLogin(email, password);

        if(member) {
            const token = member.authenticate();
            response.send(token);
        } else {
            response.status(400).end();
        }
    });


    app.get('/v1/authentication/logout', async (request, response) => {

    });

    app.post('/v1/authentication/forgot-password', async (request, response) => {
        const member = MemberModel.findOne({email: request.body.email});

        if(member) {
            const token = await member.authCode('reset');

            EmailService.to(member.email)
                .from(process.env.EMAIL_FROM_ADDRESS)
                .subject('Your Reset Code')
                .message(request.body.resetBase + '/' + token);

            response.status(200).end();
        }

        response.status(400).end();
    });

    app.post('/v1/authentication/reset-password', async (request, response) => {

    });
}