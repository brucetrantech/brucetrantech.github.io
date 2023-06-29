export const e = (str: string, shift: number): string => {
  let encryptedText = "";
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    if (char.match(/[a-z]/i)) {
      const code = str.charCodeAt(i);
      
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97); 
      }
    }
    
    encryptedText += char;
  }
  
  return encryptedText;
};

export const d = (encode: string, shift: number): string => {
  return e(encode, 26 - shift);
}
