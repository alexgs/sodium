// @flow
import cipherTextFactory from './cipher-text';
import { encrypt } from './index';
import type { CipherText } from './cipher-text';
import type { Key } from './key';
import type { Nonce } from './nonce';

interface ClearText {
    buffer:Buffer;
    encrypt: ( key:Key, nonce:Nonce ) => CipherText;
    string:string;
}

const clearTextPrototype = {
    encrypt( key:Key, nonce:Nonce ):CipherText {
        const cipherBuffer = encrypt( this.buffer, nonce.buffer, key.buffer );
        return cipherTextFactory.fromBuffer( cipherBuffer );
    }
};

const clearTextFactory = {
    fromBuffer( buffer:Buffer ):ClearText {
        const clearTextObject = Object.create( clearTextPrototype );
        return Object.defineProperties( clearTextObject, {
            buffer: { value: buffer },
            string: { value: buffer.toString() }
        } );
    },

    fromString( message:string ):ClearText {
        const clearTextObject = Object.create( clearTextPrototype );
        return Object.defineProperties( clearTextObject, {
            buffer: { value: Buffer.from( message ) },
            string: { value: message }
        });
    }
};

export default clearTextFactory;
export type { ClearText };
