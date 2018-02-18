import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';

import sodium from '../index';
import cipherTextFactory from '../src/cipher-text';

chai.use( dirtyChai );

describe( 'An object with the "CipherText" interface', function() {
    it( 'has a read-only property `hex`', function() {
        const hex = '596f75206d6179206e6f74207265636f676e697a65206d652062656361757365206f6620746865207265642061726d2e';
        const cipher = sodium.cipherFromHex( hex );

        expect( cipher.hex ).to.be.ok();

        expect( function() {
            cipher.hex = 'I cannot abide these Jawas.';
        } ).to.throw( Error, 'Cannot assign to read only property \'hex\' of object \'#<Object>\'' );
    } );

    it( 'has a read-only property `buffer`', function() {
        const hex = '596f75206d6179206e6f74207265636f676e697a65206d652062656361757365206f6620746865207265642061726d2e';
        const cipher = sodium.cipherFromHex( hex );

        expect( cipher.buffer ).to.be.ok();

        expect( function() {
            cipher.buffer = 'I cannot abide these Jawas.';
        } ).to.throw( Error, 'Cannot assign to read only property \'buffer\' of object \'#<Object>\'' );
    } );
} );

describe( 'The cipher text factory', function() {
    it( 'can make a "cipher text" object from a buffer', function() {
        const buffer = Buffer.from( 'You may not recognize me because of the red arm.' );
        const cipher = cipherTextFactory.fromBuffer( buffer );

        expect( cipher.buffer ).to.be.instanceOf( Buffer );
        expect( buffer.equals( cipher.buffer ) ).to.equal( true );
    } );
} );
