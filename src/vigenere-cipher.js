class VigenereCipheringMachine {
  constructor(direct) {
    this.isDirect = direct;
    if (direct == undefined) this.isDirect = true;
  }

  encrypt(message, key, order = 1) {
    let i = 0;
    let arr = message.split("").map(elem => {
      if (!/[A-Z]/i.test(elem)) {
        return elem;
      }
      i = i % key.length;
      return this.encryptLetter(elem, key[i++], order);
    });
    if (!this.isDirect) arr = arr.reverse();
    return arr.join("");
  }

  decrypt(message, key) {
    return this.encrypt(message, key, -1);
  }

  encryptLetter(letter, keyLetter, order = 1) {
    let res =
      26 + 
      letter.toUpperCase().charCodeAt() -
      65 +
      order * (keyLetter.toUpperCase().charCodeAt() - 65);

    return String.fromCharCode((res % 26) + 65);
  }
}

module.exports = VigenereCipheringMachine;
