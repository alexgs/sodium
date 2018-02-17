// @flow
import { ENCODING } from './constants';

interface CipherText {
    buffer:Buffer,
    hex:string
}

const cipherTextFactory = {
    fromHex( hex:string ):CipherText {
        const buffer = Buffer.from( hex, ENCODING.HEX );
        const cipherTextObject = Object.defineProperties( {}, {
            buffer: { value: buffer },
            hex: { value: hex }
        } );
        return cipherTextObject;
    }
};

export default cipherTextFactory;
export type { CipherText };
