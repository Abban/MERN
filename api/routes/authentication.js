import {check, validationResult} from 'express-validator';
import {MemberModel} from '../models/Member';
import EmailService from "../services/EmailService";

export default (app) => {

    app.post('/v1/authentication/register', [
            check('email')
                .notEmpty()
                .isEmail()
                .normalizeEmail(),
            check('password')
                .notEmpty()
                .isLength({min: 8})
                .custom((value, {req}) => {
                    return (value !== req.body.confirmPassword) ? false : value;
                }).withMessage('Passwords must match')
        ], async (request, response) => {

            const errors = await validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(422).json({errors: errors.array()});
            }

            response.send(request.body).end();
        }
    );


    app.post('/v1/authentication/login', async (request, response) => {
        const email = request.body.email;
        const password = request.body.password;

        const member = await MemberModel.fetchFromLogin(email, password);

        if (member) {
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

        if (member) {
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