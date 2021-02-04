// Thanks to https://gist.github.com/EvanHahn/2587465
export function caesarShift(str: string, amount: number): string {
  // Wrap the amount
  if (amount < 0) {
    return caesarShift(str, amount + 26);
  }

  // Make an output variable
  let output = '';

  // Go through each character
  for (let i = 0; i < str.length; i++) {
    // Get the character we'll be appending
    let c = str[i];

    // If it's a letter...
    if (c.match(/[a-z]/i)) {
      // Get its code
      const code = str.charCodeAt(i);

      // Uppercase letters
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      }

      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }

    // Append
    output += c;
  }

  // All done!
  return output;
}
