// @flow
import { ENCODING } from './constants';
import clearTextFactory from './clear-text';
import { decrypt } from './index';
import type { ClearText } from './clear-text';
import type { Key } from './key';
import type { Nonce } from './nonce';

interface CipherText {
    buffer:Buffer,
    decrypt: ( key:Key, nonce:Nonce ) => ClearText;
    hex:string
}

const cipherTextPrototype = {
    decrypt( key:Key, nonce:Nonce ):ClearText {
        const clearBuffer = decrypt( this.buffer, nonce.buffer, key.buffer );
        return clearTextFactory.fromBuffer( clearBuffer );
    }
};

const cipherTextFactory = {
    fromBuffer( buffer:Buffer ):CipherText {
        const cipherTextObject = Object.create( cipherTextPrototype );
        return Object.defineProperties( cipherTextObject, {
            buffer: { value: buffer },
            hex: { value: buffer.toString( ENCODING.HEX ) }
        } );
    },

    fromHex( hex:string ):CipherText {
        const cipherTextObject = Object.create( cipherTextPrototype );
        return Object.defineProperties( cipherTextObject, {
            buffer: { value: Buffer.from( hex, ENCODING.HEX ) },
            hex: { value: hex }
        } );
    }
};

export default cipherTextFactory;
export type { CipherText };
