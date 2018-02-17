// @flow
interface ClearText {
    buffer:Buffer;
    string:string;
}

const clearTextFactory = {
    fromString( message:string ):ClearText {
        const buffer = Buffer.from( message );
        const clearTextObject = Object.defineProperties( {}, {
            buffer: { value: buffer },
            string: { value: message }
        });
        return clearTextObject;
    }
};

export default clearTextFactory;
export type { ClearText };
