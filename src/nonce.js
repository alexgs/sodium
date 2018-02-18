// @flow
import { ENCODING, NONCEBYTES } from './constants';

interface Nonce {
    buffer:Buffer;
    hex:string;
}

const messages = {
    badHexLength: ( actualLength:number ) => {
        return `The nonce hex string must contain ${NONCEBYTES} bytes, but ${actualLength} bytes were provided.`
    }
};

const nonceFactory = {
    fromBuffer( buffer:Buffer ):Nonce {
        const nonceObject = Object.defineProperties( {}, {
            buffer: { value: buffer },
            hex: { value: buffer.toString( ENCODING.HEX )}
        } );
        return nonceObject;
    },

    fromHex( hex:string ):Nonce {
        const buffer = Buffer.from( hex, ENCODING.HEX );
        if ( buffer.length !== NONCEBYTES ) {
            throw new Error( messages.badHexLength( buffer.length ) );
        }
        return this.fromBuffer( buffer );
    }
};

export default nonceFactory;
export { messages };
export type { Nonce };
