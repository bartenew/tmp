import {decrypt, encrypt, encryptSentence} from './index';

describe('Encryptor', () => {
  beforeAll(() => {
    console.log = jest.fn();
    console.debug = jest.fn();
  });

  it('should accept only letters and spaces and max 7 words', () => {
    const sentence1 = 'The dog jumped over the fence, too';
    const sentence2 = 'The dog jumped over the fence too MORE MORE';
    const sentence3 = '';
    const sentence4 = 'two words ##55';
    const sentence5 = 'two words';
    expect(() => encryptSentence(sentence1, 1)).toThrowError();
    expect(() => encryptSentence(sentence2, 1)).toThrowError();
    expect(() => encryptSentence(sentence3, 1)).toThrowError();
    expect(() => encryptSentence(sentence4, 1)).toThrowError();
    expect(encryptSentence(sentence5, 1)).toBeTruthy();
  });

  it('should encrypt into 1 word', () => {
    const sentence = 'The dog jumped over the fence too';
    const encryptedToken = encryptSentence(sentence, 1);
    expect(encryptedToken.split(' ').length).toBe(1);
  });

  it('should be able to encrypt and decrypt the same token correctly', () => {
    const encrypted = encrypt('original', 33);
    const decrypted = decrypt(encrypted, 33);
    expect(decrypted).toBe('original');
  });
});
