// @flow
import { KEYBYTES, MACBYTES, NONCEBYTES } from './constants';

import { encrypt, decrypt, key, nonce } from 'sodium-encryption/sodium';
import cipherTextFactory from './cipher-text';
import clearTextFactory from './clear-text';
import keyFactory from './key';
import nonceFactory from './nonce';
import type { CipherText } from './cipher-text';
import type { ClearText } from './clear-text';
import type { Key } from './key';
import type { Nonce } from './nonce';

function cipherFromHex( hex:string ):CipherText {
    return cipherTextFactory.fromHex( hex );
}

function clearFromString( message:string ):ClearText {
    return clearTextFactory.fromString( message );
}

function keyFromHex( hex:string ):Key {
    return keyFactory.fromHex( hex );
}

function newKey():Key {
    const buffer = key();
    return keyFactory.fromBuffer( buffer );
}

function newNonce():Nonce {
    const buffer = nonce();
    return nonceFactory.fromBuffer( buffer );
}

function nonceFromHex( hex:string ):Nonce {
    return nonceFactory.fromHex( hex );
}

const sodiumLibrary = {
    KEYBYTES,
    MACBYTES,
    NONCEBYTES,
    cipherFromHex,
    clearFromString,
    keyFromHex,
    newKey,
    newNonce,
    nonceFromHex
};

export default sodiumLibrary;
export { encrypt, decrypt, key, nonce, };
