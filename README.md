| Statements                  | Branches                | Functions                 | Lines                |
| --------------------------- | ----------------------- | ------------------------- | -------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg)    |

## Setup

`npm i` - install dependencies and compile.

## Usage

`npm run encrypt "The dog jumped over the fence too" secret-key`

`npm run decrypt encrypted-string secret-key`

```
npm run encrypt "The dog" secret-key
OUTPUT: U2FsdGVkX1+bbZNSyDkIFLpNnU.....
```

## Tests

`npm test`


### Notes
- The encrypt/decrypt function can be replaced by any other like AES.
- Used `gts` https://github.com/google/gts for project boilerplating

#### Algorithm

#### Encrypt
 - Encrypt each word in the sentence and put them into a queue
 - Take pairs off the queue, encrypt them and put the resulting singled work at the tail
 - Once only two words left on the queue, join them, encrypt and return the result.

### Decrypt
 - Decrypt first string
 - Pass the result into helper function
 - Return the result of the following recursion
    - If one word is passed return decrypted version of it
    - If two words are passed recurse on them and combine the results into a single string with a space in between.

