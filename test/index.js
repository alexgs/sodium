import { expect } from 'chai';

import sodium, * as utils from '../index';
import { messages as keyMessages } from '../dist/key';
import { ENCODING } from '../dist/constants';
import { messages as nonceMessages } from '../dist/nonce';

describe( 'My "Sodium" library', function() {
    context( 'has a `keyFromHex` method that', function() {
        it( 'returns a Key object', function() {
            const keyBuffer = utils.key();
            const keyHex = keyBuffer.toString( ENCODING.HEX );
            const key = sodium.keyFromHex( keyHex );
            expect( key.hex ).to.equal( keyHex );
            expect( key.buffer ).to.be.instanceOf( Buffer );
            expect( key.buffer.length ).to.equal( sodium.KEYBYTES );
        } );

        it( 'throws an error if there is an incorrect number of bytes', function() {
            const badHex = 'f766048383a786c3ea65d5598b037990b6fe1568fa';
            expect( function() {
                sodium.keyFromHex( badHex );
            } ).to.throw( Error, keyMessages.badHexLength( badHex.length / 2 ) );
        } );
    } );

    context( 'has a `nonceFromHex` method that', function() {
        it( 'returns a Nonce object', function() {
            const nonceBuffer = utils.nonce();
            const nonceHex = nonceBuffer.toString( ENCODING.HEX );
            const nonce = sodium.nonceFromHex( nonceHex );
            expect( nonce.hex ).to.equal( nonceHex );
            expect( nonce.buffer ).to.be.instanceOf( Buffer );
            expect( nonce.buffer.length ).to.equal( sodium.NONCEBYTES );
        } );

        it( 'throws an error if there is an incorrect number of bytes', function() {
            const badHex = 'f766048383a786c3ea65d5598b037990b6fe1568fa';
            expect( function() {
                sodium.nonceFromHex( badHex );
            } ).to.throw( Error, nonceMessages.badHexLength( badHex.length / 2 ) );
        } );
    } );
} );
