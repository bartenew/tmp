import * as CryptoJS from 'crypto-js';

/**
 * Encrypt text with a given key.
 */
export function encrypt(str: string, key: string): string {
  return CryptoJS.AES.encrypt(str, key).toString();
}

export function decrypt(str: string, key: string): string {
  return CryptoJS.AES.decrypt(str, key).toString(CryptoJS.enc.Utf8) || str;
}
