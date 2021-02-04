| Statements                  | Branches                | Functions                 | Lines                |
| --------------------------- | ----------------------- | ------------------------- | -------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/Coverage-92.86%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg)    |

## Setup

`npm i` - install dependencies and compile.

## Usage
This program is using Caesar Shift algorithm for simplicity purposes, so the key for encryption is numeric.
The encrypt/decrypt function can be replaced by any other like AES.

`npm run encrypt "The dog jumped over the fence too" {numericEncryptionKey}`

```
npm run encrypt "My sentence" 7
OUTPUT: You entered: "My sentence" with encryption key "7"
        gsbhsbqsAm
```

## Tests

`npm test`


### Notes

Used `gts` https://github.com/google/gts for project boilerplating 

#### Algorithm

 - Encrypt each word in the sentence and put them into a queue
 - Take pairs off the queue, encrypt them and put the resulting singled work at the tail
 - Once only two words left on the queue, join them, encrypt and return the result.
