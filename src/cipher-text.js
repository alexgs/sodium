// @flow
import { ENCODING } from './constants';

interface CipherText {
    buffer:Buffer,
    hex:string
}

const cipherTextFactory = {
    fromBuffer( buffer:Buffer ):CipherText {
        return Object.defineProperties( {}, {
            buffer: { value: buffer },
            hex: { value: buffer.toString( ENCODING.HEX ) }
        } );
    },

    fromHex( hex:string ):CipherText {
        // const buffer = Buffer.from( hex, ENCODING.HEX );
        // const cipherTextObject = {};
        return Object.defineProperties( {}, {
            buffer: { value: Buffer.from( hex, ENCODING.HEX ) },
            hex: { value: hex }
        } );
    }
};

export default cipherTextFactory;
export type { CipherText };
