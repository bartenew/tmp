import * as crypto from 'crypto';
import assert = require('assert');

/**
 * Encrypt each word of a sentence, then encrypt each pair of resulting words until left with a single string.
 */
export function encryptSentence(input: string, encKey: string): string {
  assert(
    /^[a-zA-Z\s]+$/.test(input) && input.split(' ').length <= 7,
    'Your sentence must include letters and spaces only and be 7 words at most'
  );
  return _encryptSentence(input, encKey);
}
export function decryptSentence(input: string, encKey: string) {
  return _decryptSentence(decrypt(input, encKey), encKey);
}

function _decryptSentence(input: string, encKey: string): string {
  const parts = input.split(' ');
  if (parts.length === 1) {
    return decrypt(input, encKey);
  } else {
    return decryptSentence(parts[1], encKey) + ' ' + decryptSentence(parts[0], encKey);
  }
}

function _encryptSentence(input: string, encryptionKey: string) {
  const words = input.split(' ');
  const encryptedQueue = words.map(word => encrypt(word, encryptionKey));

  // take and encrypt pairs from the queue until only 1 pair left
  while (encryptedQueue.length > 2) {
    const pair = popPair(encryptedQueue);
    encryptedQueue.push(encrypt(`${pair[0]} ${pair[1]}`, encryptionKey));
  }
  // encrypt last pair and return single resulting string
  return encrypt(`${encryptedQueue.pop()} ${encryptedQueue.pop()}`, encryptionKey);
}

/**
 * Encrypt text with a given key.
 */
export function encrypt(str: string, key: string): string {
  const cipher = crypto.createCipher('aes-256-cbc', key);
  const crypted = cipher.update(str, 'utf8', 'hex');
  return crypted + cipher.final('hex');
}

export function decrypt(str: string, key: string): string {
  const decipher = crypto.createDecipher('aes-256-cbc', key);
  try {
    const dec = decipher.update(str, 'hex', 'utf8');
    return dec + decipher.final('utf8');
  } catch (e) {
    return str;
  }
}

function popPair(queue: string[]): [string, string] {
  return [queue.pop()!, queue.pop()!];
}
