import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('ArrayBufferConverter methods test', () => {
    const toStr = new ArrayBufferConverter;
    toStr.load(getBuffer());
    expect(toStr.stringify()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}')
})