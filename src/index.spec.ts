import {decrypt, decryptSentence, encrypt, encryptSentence} from './index';

describe('Encryptor', () => {
  beforeAll(() => {

  });

  it('should accept only letters and spaces and max 7 words', () => {
    const sentence1 = 'The dog jumped over the fence, too';
    const sentence2 = 'The dog jumped over the fence too MORE MORE';
    const sentence3 = '';
    const sentence4 = 'two words ##55';
    const sentence5 = 'two words';
    expect(() => encryptSentence(sentence1, 'test')).toThrowError();
    expect(() => encryptSentence(sentence2, 'test')).toThrowError();
    expect(() => encryptSentence(sentence3, 'test')).toThrowError();
    expect(() => encryptSentence(sentence4, 'test')).toThrowError();
    expect(encryptSentence(sentence5, 'test')).toBeTruthy();
  });

  it('should encrypt into 1 same word', () => {
    const sentence = 'The dog jumped over the fence too';
    const encryptedToken = encryptSentence(sentence, 'test');
    expect(encryptedToken.split(' ').length).toBe(1);
    expect(encryptSentence(sentence, 'test')).toBe(encryptedToken);
  });

  it('should be able to encrypt and decrypt the same token correctly', () => {
    const encrypted = encrypt('original', 'pass');
    const decrypted = decrypt(encrypted, 'pass');
    expect(decrypted).toBe('original');
  });

  it('should be able to decrypt', () => {
    const sentence = 'to be or not to be';
    const encryptedSentence = encryptSentence(sentence, 'test');
    expect(decryptSentence(encryptedSentence, 'test')).toBe(sentence);
  })
});
