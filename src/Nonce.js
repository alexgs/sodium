// @flow

import { ENCODING, NONCEBYTES } from './constants';

interface Nonce {
    getBuffer: () => Buffer;
    getHex: () => string;
}

export type { Nonce };

const nonceStorage:WeakMap<Object,Buffer> = new WeakMap();
const nonceObjectPrototype = {
    getBuffer():Buffer {
        const buffer = nonceStorage.get( this );
        if ( buffer ) {
            return buffer;
        } else {
            throw new Error( 'Something unthinkable happened!' );
        }
    },

    getHex():string {
        return this.getBuffer().toString( ENCODING.HEX );
    }
};

const NonceFactory = {
    fromBuffer( buffer:Buffer ):Nonce {
        const nonceObject = Object.create( nonceObjectPrototype );
        nonceStorage.set( nonceObject, buffer );
        return nonceObject;
    },

    fromHex( hex:string ):Nonce {
        const buffer = Buffer.from( hex, ENCODING.HEX );
        if ( buffer.length !== NONCEBYTES ) {
            throw new Error( this.messages.badHexLength( buffer.length ) );
        }
        return this.fromBuffer( buffer );
    },

    messages: {
        badHexLength: ( actualLength:number ) => {
            return `The nonce hex string must contain ${NONCEBYTES} bytes, but ${actualLength} bytes were provided.`
        }
    }
};

export default NonceFactory;
