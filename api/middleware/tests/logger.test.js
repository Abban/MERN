import logger from '../logger';

test('logger_onRun_callsNext', () => {
    const nextMock = jest.fn(x => x);

    logger({}, {}, nextMock);
    
    expect(nextMock.mock.calls.length).toBe(1);
});