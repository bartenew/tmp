import {caesarShift} from './caesar-shift';
import assert = require('assert');

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

  while (encryptedQueue.length > 2) {
    const pair = popPair(encryptedQueue);
    encryptedQueue.push(encrypt(`${pair[0]}${pair[1]}`, encryptionKey));
  }
  return encrypt(
    `${encryptedQueue.pop()}${encryptedQueue.pop()}`,
    encryptionKey
  );
}

export function encrypt(token: string, key: number): string {
  // return strongEncryption(token, key);
  return caesarShift(token, key);
}

export function decrypt(token: string, key: number): string {
  return caesarShift(token, -key);
}

function popPair(queue: string[]): [string, string] {
  return [queue.pop()!, queue.pop()!];
}
