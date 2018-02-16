import { encrypt, decrypt, key, nonce } from 'sodium-encryption/sodium';

const sodium = { encrypt, decrypt, key, nonce };

export default sodium;
export { encrypt, decrypt, key, nonce  };
