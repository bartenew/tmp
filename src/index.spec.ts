import {decryptSentence, encryptSentence} from './index';

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

  it('should be able to decrypt encrypted string', () => {
    const sentence1 = 'to be or not to be';
    const encryptedSentence = encryptSentence(sentence1, 'test');
    expect(decryptSentence(encryptedSentence, 'test')).toBe(sentence1);

    const sentence2 = 'The dog jumped over the fence too';
    const encryptedSentence2 = encryptSentence(sentence2, 'test');
    expect(decryptSentence(encryptedSentence2, 'test')).toBe(sentence2);
  });
});
