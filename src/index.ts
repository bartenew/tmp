import {caesarShift} from './caesar-shift';
import assert = require('assert');

type Pair = [string, string];

const DEFAULT_ENC_KEY = 5;

export function encryptSentence(input = process.argv[2], encKey = DEFAULT_ENC_KEY): string {
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
  const finalToken = encrypt(
    `${encryptedQueue.pop()}${encryptedQueue.pop()}`,
    encryptionKey
  );
  console.debug(finalToken);
  return finalToken;
}

function popPair(queue: string[]): Pair {
  return [queue.pop()!, queue.pop()!];
}

export function encrypt(token: string, key: number): string {
  return caesarShift(token, key);
}

export function decrypt(token: string, key: number): string {
  return caesarShift(token, -key);
}
