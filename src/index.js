// @flow
const { crypto_secretbox_KEYBYTES, crypto_secretbox_NONCEBYTES, crypto_secretbox_MACBYTES } = require('sodium-native');
import { encrypt, decrypt, key, nonce } from 'sodium-encryption/sodium';
const sodium = {
    encrypt,
    decrypt,
    key,
    nonce,
    KEYBYTES: crypto_secretbox_KEYBYTES,
    MACBYTES: crypto_secretbox_MACBYTES,
    NONCEBYTES: crypto_secretbox_NONCEBYTES
};
export default sodium;
