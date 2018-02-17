// @flow
import { KEYBYTES, MACBYTES, NONCEBYTES } from './constants';

import { encrypt, decrypt, key, nonce } from 'sodium-encryption/sodium';
import clearTextFactory from './clear-text';
import nonceFactory from './nonce';
import type { ClearText } from './clear-text';
import type { Nonce } from './nonce';

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
