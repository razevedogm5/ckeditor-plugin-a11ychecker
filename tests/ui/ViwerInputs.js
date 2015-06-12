/* bender-tags: a11ychecker,unit */

( function() {
	'use strict';

	bender.require( [ 'ui/ViewerInputs', 'mocking' ], function( ViewerInputs, mocking ) {
		bender.test( {
			'test ViewerInputs.Text aria-labeleddby': function() {
				var mock = new ViewerInputs.Text( 'foo', {} ),
					labelId = mock.input.getAttribute( 'aria-labelledby' ),
					labelElem;

				CKEDITOR.document.getBody().append( mock.wrapper );

				assert.areSame( 'string', typeof labelId, 'Attr aria-labelledby type' );
				assert.areNotSame( '', labelId, 'Attr aria-labelledby' );


				labelElem = CKEDITOR.document.getById( labelId );

				assert.isInstanceOf( CKEDITOR.dom.element, labelElem, 'Element pointed by aria-labelledby' );
			},

			'test ViewerInputs.Checkbox aria-labeleddby': function() {
				var mock = new ViewerInputs.Checkbox( 'foo', {} ),
					labelId = mock.input.getAttribute( 'aria-labelledby' ),
					labelElem;

				CKEDITOR.document.getBody().append( mock.wrapper );

				assert.areSame( 'string', typeof labelId, 'Attr aria-labelledby type' );
				assert.areNotSame( '', labelId, 'Attr aria-labelledby' );


				labelElem = CKEDITOR.document.getById( labelId );

				assert.isInstanceOf( CKEDITOR.dom.element, labelElem, 'Element pointed by aria-labelledby' );
			},

			'test ViewerInputs.Select aria-labeleddby': function() {
				var mock = new ViewerInputs.Select( 'foo', {} ),
					labelId = mock.input.getAttribute( 'aria-labelledby' ),
					labelElem;

				CKEDITOR.document.getBody().append( mock.wrapper );

				assert.areSame( 'string', typeof labelId, 'Attr aria-labelledby type' );
				assert.areNotSame( '', labelId, 'Attr aria-labelledby' );


				labelElem = CKEDITOR.document.getById( labelId );

				assert.isInstanceOf( CKEDITOR.dom.element, labelElem, 'Element pointed by aria-labelledby' );
			}
		} );
	} );
} )();