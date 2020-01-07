import {CompositionModel} from "../models/Composition";

export default (app) => {

    app.get('/v1/compositions', async (request, response) => {
        const compositions = await CompositionModel.find();
        response.send(compositions);
    });

    app.get('/v1/compositions/:id', async (request, response) => {
        try {
            const composition = await CompositionModel.findById(request.params.id);
            if (composition) {
                response.send(composition);
            } else {
                response.status(404).end();
            }
        } catch (e) {
            response.status(404).end();
        }
    });

    app.post('/v1/compositions', async (request, response) => {
        const composition = await CompositionModel.create(request.body);
        response.status(composition ? 200 : 500).end();
    });

    app.put('/v1/compositions/:id', (request, response) => {
        CompositionModel.findByIdAndUpdate(
            request.params.id,
            request.body,
            error => {
                response.status(error ? 500 : 200).end();
            }
        );
    });

    app.delete('/v1/compositions/:id', (request, response) => {
        CompositionModel.findByIdAndDelete(
            request.params.id,
            error => {
                response.status(error ? 500 : 200).end();
            }
        );
    });
}
