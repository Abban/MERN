import {MemberModel} from '../models/Member';

export default (app) => {


    app.get('/v1/members', async (request, response) => {
        // Check admin
        const members = await MemberModel.find();
        response.send(members);
    });


    app.get('/v1/members/:id', async (request, response) => {
        // make sure its admin or current logged in member
        try {
            const member = await MemberModel.findById(request.params.id, () => {
                if (member) {
                    response.send(member);
                } else {
                    response.status(404).end();
                }
            });
        } catch (e) {
            response.status(404).end();
        }
    });


    app.post('/v1/members', async (request, response) => {
        // Make sure they don't exist
        const member = MemberModel.create(request.body);
        response.status(member ? 200 : 500).end();
    });


    app.put('/v1/members/:id', (request, response) => {
        MemberModel.findByIdAndUpdate(
            request.params.id,
            request.body,
            error => {
                response.status(error ? 500 : 200).end();
            }
        );
    });

    
    app.delete('/v1/members/:id', (request, response) => {
        MemberModel.findByIdAndDelete(
            request.params.id,
            error => {
                response.status(error ? 500 : 200).end();
            }
        );
    });
};