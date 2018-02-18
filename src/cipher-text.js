// @flow
import { ENCODING } from './constants';
import { decrypt } from './index';
import type { Nonce } from './nonce';
import type { ClearText } from './clear-text';
import clearTextFactory from './clear-text';

interface CipherText {
    buffer:Buffer,
    decrypt: ( key:Buffer, nonce:Nonce ) => ClearText;
    hex:string
}

const cipherTextPrototype = {
    decrypt( key:Buffer, nonce:Nonce ):ClearText {
        const clearBuffer = decrypt( this.buffer, nonce.buffer, key );
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
