import {caesarShift} from './caesar-shift';
import assert = require('assert');

/**
 * Encrypt each word of a sentence, then encrypt each pair of resulting words until left with a single string.
 */
export function encryptSentence(input: string, encKey: number): string {
  console.log(`You entered: "${input}" with encryption key "${encKey}"`);
  assert(
    /^[a-zA-Z\s]+$/.test(input) && input.split(' ').length <= 7,
    'Your sentence must include letters and spaces only and be 7 words at most'
  );
  return _encryptSentence(input, encKey);
}

function _encryptSentence(input: string, encryptionKey: number) {
  const words = input.split(' ');
  const encryptedQueue = words.map(word => encrypt(word, encryptionKey));

  // take and encrypt pairs from the queue until only 1 pair left
  while (encryptedQueue.length > 2) {
    const pair = popPair(encryptedQueue);
    encryptedQueue.push(encrypt(`${pair[0]}${pair[1]}`, encryptionKey));
  }
  // encrypt last pair and return single resulting string
  return encrypt(
    `${encryptedQueue.pop()}${encryptedQueue.pop()}`,
    encryptionKey
  );
}

/**
 * Encrypt text with a given key.
 */
export function encrypt(str: string, key: number): string {
  // return strongEncryption(str, key);
  return caesarShift(str, key);
}

export function decrypt(str: string, key: number): string {
  return caesarShift(str, -key);
}

function popPair(queue: string[]): [string, string] {
  return [queue.pop()!, queue.pop()!];
}
