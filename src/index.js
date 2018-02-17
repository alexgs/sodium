// @flow
import { KEYBYTES, MACBYTES, NONCEBYTES } from './constants';

import { encrypt, decrypt, key, nonce } from 'sodium-encryption/sodium';
import cipherTextFactory from './cipher-text';
import clearTextFactory from './clear-text';
import nonceFactory from './nonce';
import type { CipherText } from './cipher-text';
import type { ClearText } from './clear-text';
import type { Nonce } from './nonce';

function cipherFromHex( hex:string ):CipherText {
    return cipherTextFactory.fromHex( hex );
}

function clearFromString( message:string ):ClearText {
    return clearTextFactory.fromString( message );
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
    clearFromString,
    encrypt,
    decrypt,
    key,
    newNonce,
    nonce,
    nonceFromHex
};
export default sodiumLibrary;
