import {encryptSentence} from './index';

const DEFAULT_ENCRYPTION_KEY = 5;
const encKey = process.argv[3]
  ? parseInt(process.argv[3])
  : DEFAULT_ENCRYPTION_KEY;

encryptSentence(process.argv[2], encKey);
