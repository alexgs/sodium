// @flow
const { crypto_secretbox_KEYBYTES, crypto_secretbox_NONCEBYTES, crypto_secretbox_MACBYTES } = require('sodium-native');

export const ENCODING = {
    HEX: 'hex',
    PLAIN: 'utf8'
};

export const KEYBYTES = crypto_secretbox_KEYBYTES;
export const MACBYTES = crypto_secretbox_MACBYTES;
export const NONCEBYTES = crypto_secretbox_NONCEBYTES;
