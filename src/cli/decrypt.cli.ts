import {decryptSentence} from '../index';

const DEFAULT_ENCRYPTION_KEY = 5;
const encKey = process.argv[3] ?? DEFAULT_ENCRYPTION_KEY;

const output = decryptSentence(process.argv[2], encKey);
console.log(output);
