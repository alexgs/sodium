// @flow
import { ENCODING, KEYBYTES } from './constants';

interface Key {
    buffer:Buffer;
    hex:string;
}

const messages = {
    badHexLength: ( actualLength:number ) => {
        return `The key hex string must contain ${KEYBYTES} bytes, but ${actualLength} bytes were provided.`
    }
};

const keyFactory = {
    fromBuffer( buffer:Buffer ):Key {
        return Object.defineProperties( {}, {
            buffer: { value: buffer },
            hex: { value: buffer.toString( ENCODING.HEX )}
        } );
    },

    fromHex( hex:string ):Key {
        const buffer = Buffer.from( hex, ENCODING.HEX );
        if ( buffer.length !== KEYBYTES ) {
            throw new Error( messages.badHexLength( buffer.length ) );
        }
        return this.fromBuffer( buffer );
    }
};

export default keyFactory;
export { messages };
export type { Key };
