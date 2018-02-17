// @flow
import { KEYBYTES, MACBYTES, NONCEBYTES } from './constants';

import { encrypt, decrypt, key, nonce } from 'sodium-encryption/sodium';
import nonceFactory from './nonce';
import type { Nonce } from './nonce';

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
    encrypt,
    decrypt,
    key,
    newNonce,
    nonce,
    nonceFromHex
};
export default sodiumLibrary;
