import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';

import sodium, * as utils from '../index';
import { MACBYTES } from '../src/constants';

chai.use( dirtyChai );

describe( 'An object with the "ClearText" interface', function() {
    it( 'has a read-only property `string`', function() {
        const message = 'You may not recognize me because of the red arm.';
        const clear = sodium.clearFromString( message );

        expect( clear.string ).to.be.ok();
        expect( clear.buffer ).to.be.ok();

        expect( function() {
            clear.string = 'I cannot abide these Jawas.';
        } ).to.throw( Error, 'Cannot assign to read only property \'string\' of object \'#<Object>\'' );
    } );

    it( 'has a read-only property `buffer`', function() {
        const message = 'You may not recognize me because of the red arm.';
        const clear = sodium.clearFromString( message );

        expect( clear.buffer ).to.be.ok();

        expect( function() {
            clear.buffer = 'I cannot abide these Jawas.';
        } ).to.throw( Error, 'Cannot assign to read only property \'buffer\' of object \'#<Object>\'' );
    } );

    context( 'has a function `encrypt` that', function() {
        it( 'returns a "cipher-text" object', function() {
            const key = utils.key();
            const nonce = sodium.newNonce();
            const message = 'You may not recognize me because of the red arm.';
            const clear = sodium.clearFromString( message );
            const cipherLength = clear.buffer.length + MACBYTES;

            const cipher = clear.encrypt( key, nonce );
            expect( cipher.hex ).to.be.ok();
            expect( cipher.hex.length ).to.equal( cipherLength * 2 );
            expect( cipher.buffer ).to.be.ok();
            expect( cipher.buffer ).to.be.instanceOf( Buffer );
            expect( cipher.buffer.length ).to.equal( cipherLength );
        } );
    } );
} );
