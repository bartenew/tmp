import {decrypt, encrypt} from './aes-encrypt';

describe('Encrypt Functions', () => {
  it('should be able to encrypt and decrypt the same token correctly', () => {
    const encrypted = encrypt('original', 'pass');
    const decrypted = decrypt(encrypted, 'pass');
    expect(decrypted).toBe('original');
  });
});
