// @flow
import { encrypt } from './index';
import type { CipherText } from './cipher-text';
import type { Nonce } from './nonce';
import cipherTextFactory from './cipher-text';

interface ClearText {
    buffer:Buffer;
    encrypt: ( key:Buffer, nonce:Nonce ) => CipherText;
    string:string;
}

const clearTextPrototype = {
    encrypt( key:Buffer, nonce:Nonce ):CipherText {
        const cipherBuffer = encrypt( this.buffer, nonce.buffer, key );
        return cipherTextFactory.fromBuffer( cipherBuffer );
    }
};

const clearTextFactory = {
    fromString( message:string ):ClearText {
        const buffer = Buffer.from( message );
        const clearTextObject = Object.create( clearTextPrototype );
        return Object.defineProperties( clearTextObject, {
            buffer: { value: buffer },
            string: { value: message }
        });
    }
};

export default clearTextFactory;
export type { ClearText };
