import {caesarShift} from './caesar-shift';

describe('CaesarShift', () => {
  it('should be the same when reversed', () => {
    const sentence = "Caesar wasn't the first emperor";
    const ciphered = caesarShift(sentence, 2);
    expect(caesarShift(ciphered, -2)).toBe(sentence);
    expect(caesarShift(caesarShift(sentence, -99), 99)).toBe(sentence);
  });
});
