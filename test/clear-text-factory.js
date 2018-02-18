import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';

import clearTextFactory from '../src/clear-text';

chai.use( dirtyChai );

describe( 'The clear text factory', function() {
    const songs = {
        fionaApple: 'Criminal',
        lit: 'My Own Worst Enemy',
        theSofties: 'Charms around Your Wrist',
        theSugarcubes: 'Hit'
    };

    it( 'handles a plain object as input', function() {
        const plain = clearTextFactory.fromPlainObject( songs );
        expect( plain.json ).to.deep.equal( songs );
        expect( plain.string ).to.equal( JSON.stringify( songs ) );
    } );

    it( 'handles JSON data passed in a buffer', function() {
        const buffer = Buffer.from( JSON.stringify( songs ) );
        const plain = clearTextFactory.fromBuffer( buffer );
        expect( plain.json ).to.deep.equal( songs );
        expect( plain.string ).to.equal( JSON.stringify( songs ) );
    } );

    it( 'handles JSON data passed in a string', function() {
        const plain = clearTextFactory.fromString( JSON.stringify( songs ) );
        expect( plain.json ).to.deep.equal( songs );
        expect( plain.string ).to.equal( JSON.stringify( songs ) );
    } );
} );
