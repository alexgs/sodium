import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';

import sodium from '../index';
import clearTextFactory from '../dist/clear-text';

chai.use( dirtyChai );

describe( 'An object with the "ClearText" interface', function() {
    it( 'has a read-only property `string`', function() {
        const message = 'You may not recognize me because of the red arm.';
        const clear = clearTextFactory.fromString( message );

        expect( clear.string ).to.be.ok();
        expect( clear.buffer ).to.be.ok();

        expect( function() {
            clear.string = 'I cannot abide these Jawas.';
        } ).to.throw( Error, 'Cannot assign to read only property \'string\' of object \'#<Object>\'' );
    } );

    it( 'has a read-only property `buffer`', function() {
        const message = 'You may not recognize me because of the red arm.';
        const clear = clearTextFactory.fromString( message );

        expect( clear.buffer ).to.be.ok();

        expect( function() {
            clear.buffer = 'I cannot abide these Jawas.';
        } ).to.throw( Error, 'Cannot assign to read only property \'buffer\' of object \'#<Object>\'' );
    } );
} );
