export default (request, response, next) => {
    console.log(
        '=> ',
        request.method,
        request.originalUrl,
        '|| Authenticated: ',
        request.isAuthenticated
    );
    next();
};