// @flow
import cipherTextFactory from './cipher-text';
import { encrypt } from './index';
import type { CipherText } from './cipher-text';
import type { PlainObject } from './index';
import type { Key } from './key';
import type { Nonce } from './nonce';

interface ClearText {
    buffer:Buffer;
    encrypt: ( key:Key, nonce:Nonce ) => CipherText;
    json:?PlainObject;
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
        const message = buffer.toString();
        const plainObject = parseJson( message );
        return Object.defineProperties( clearTextObject, {
            buffer: { value: buffer },
            json: { value: plainObject },
            string: { value: message }
        } );
    },

    fromPlainObject( object:PlainObject ):ClearText {
        const json = JSON.stringify( object );
        return this.fromString( json );
    },

    fromString( message:string ):ClearText {
        const clearTextObject = Object.create( clearTextPrototype );
        const plainObject = parseJson( message );
        return Object.defineProperties( clearTextObject, {
            buffer: { value: Buffer.from( message ) },
            json: { value: plainObject },
            string: { value: message }
        });
    }
};

function parseJson( json:string ):PlainObject|null {
    try {
        return JSON.parse( json );
    } catch ( error ) {
        // Continue on `SyntaxError`, rethrow on other error types
        if ( error instanceof SyntaxError ) {
            return null;
        } else {
            throw error;
        }
    }
}

export default clearTextFactory;
export type { ClearText };
