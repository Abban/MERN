import authentication from '../authentication';

test('authentication_onRun_callsNext', () => {
    const nextMock = jest.fn(x => x);

    authentication({}, {}, nextMock);

    expect(nextMock.mock.calls.length).toBe(1);
});

test('authentication_onRun_setsAuthVariables', () => {
    const nextMock = jest.fn(x => x);
    const requestMock = {};

    authentication(requestMock, {}, nextMock);

    expect(requestMock.isAuthenticated).toBe(true);
});