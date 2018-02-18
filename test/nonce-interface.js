import { expect } from 'chai';

import sodium from '../index';
import { messages } from '../dist/nonce';

describe( 'An object with the "Nonce" interface', function() {
    it( 'always returns the same buffer', function() {
        const nonce1 = sodium.newNonce();
        const nonce2 = sodium.newNonce();

        // console.log( `>>> 1|${nonce1.getHex()} <<<` );
        // console.log( `>>> 2|${nonce2.getHex()} <<<` );

        expect( nonce1.buffer ).to.equal( nonce1.buffer );
        expect( nonce2.buffer ).to.equal( nonce2.buffer );
        expect( nonce1.buffer ).to.not.equal( nonce2.buffer );
    } );
} );
