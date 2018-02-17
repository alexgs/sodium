const { encrypt, decrypt, key, nonce } = require('sodium-encryption/sodium');
const { crypto_secretbox_KEYBYTES, crypto_secretbox_NONCEBYTES, crypto_secretbox_MACBYTES } = require('sodium-native');
const sodium = {
    encrypt,
    decrypt,
    key,
    nonce,
    KEYBYTES: crypto_secretbox_KEYBYTES,
    MACBYTES: crypto_secretbox_MACBYTES,
    NONCEBYTES: crypto_secretbox_NONCEBYTES
};
module.exports = sodium;
