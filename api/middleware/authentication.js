export default (request, response, next) => {

    request.isAuthenticated = true;

    next();
};