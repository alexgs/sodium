import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';

import cipherTextFactory from '../src/cipher-text';

chai.use( dirtyChai );

describe( 'The cipher text factory', function() {
    it( 'can make a "cipher text" object from a buffer', function() {
        const buffer = Buffer.from( 'You may not recognize me because of the red arm.' );
        const cipher = cipherTextFactory.fromBuffer( buffer );

        expect( cipher.buffer ).to.be.instanceOf( Buffer );
        expect( buffer.equals( cipher.buffer ) ).to.equal( true );
    } );
} );
