const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate message', () => {
    const from = 'from';
    const text = 'text';
    const message = generateMessage(from, text);
    expect(message.createAt).toBeTruthy();
    expect(message).toHaveProperty('text', text);
  });
})