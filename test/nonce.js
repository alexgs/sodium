import { expect } from 'chai';

import sodium from '../index';
import { messages } from '../dist/nonce';

describe( 'An object with the "Nonce" interface', function() {
    it( 'always returns the same buffer', function() {
        const nonce1 = sodium.newNonce();
        const nonce2 = sodium.newNonce();

        // console.log( `>>> 1|${nonce1.getHex()} <<<` );
        // console.log( `>>> 2|${nonce2.getHex()} <<<` );

        expect( nonce1.getBuffer() ).to.equal( nonce1.getBuffer() );
        expect( nonce2.getBuffer() ).to.equal( nonce2.getBuffer() );
        expect( nonce1.getBuffer() ).to.not.equal( nonce2.getBuffer() );
    } );
} );

describe( 'The `nonceFromHex` method', function(  ) {
    it( 'returns a "Nonce" object', function() {
        const hex = 'f766048383a786c3ea65d5598b037990b6fe1568fae57fe8';
        const nonce = sodium.nonceFromHex( hex );
        expect( nonce.getHex() ).to.equal( hex );
        expect( nonce.getBuffer() ).to.be.instanceOf( Buffer );
    } );

    it( 'throws an error if there is an incorrect number of bytes', function() {
        const hex = 'f766048383a786c3ea65d5598b037990b6fe1568fa';
        expect( function() {
            sodium.nonceFromHex( hex );
        } ).to.throw( Error, messages.badHexLength( hex.length / 2 ) );
    } );
} );
