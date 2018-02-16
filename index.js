const { encrypt, decrypt, key, nonce } = require('sodium-encryption/sodium');
const sodium = { encrypt, decrypt, key, nonce };
module.exports = sodium;
