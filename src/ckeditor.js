/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Font from '@ckeditor/ckeditor5-font/src/font';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';


export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	CloudServices,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	Alignment,
	Font,
	Table,
	TableToolbar,
	TableProperties,
	TableCellProperties,
	HtmlEmbed,
    SourceEditing
];

// Editor configuration.
ClassicEditor.defaultConfig = {
    fontSize: {
        options: [
            12,
            14,
            16,
            'default',
            18,
            20,
            22,
            24,
            26,
            28,
            30,
            32
        ]
    },
    fontBackgroundColor: {
        colors: [
            {
                color: 'hsl(0, 0%, 100%)',
                label: 'White'
            },
            {
                color: 'hsl(0, 0%, 0%)',
                label: 'Black'
            },
            {
                color: 'hsl(220, 38%, 94%)',
                label: 'Light grey'
            },
            {
                color: 'hsl(229, 18%, 70%)',
                label: 'Grey'
            },
            {
                color: 'hsl(208, 100%, 30%)',
                label: 'Blue'
            },
            {
                color: 'hsl(31, 93%, 54%)',
                label: 'Orange'
            },
            {
                color: 'hsl(359, 80%, 59%)',
                label: 'Red'
            },
            {
                color: 'hsl(151, 63%, 50%)',
                label: 'Green'
            },
        ]
    },
    fontColor: {
        colors: [
            {
                color: 'hsl(0, 0%, 100%)',
                label: 'White'
            },
            {
                color: 'hsl(0, 0%, 0%)',
                label: 'Black'
            },
            {
                color: 'hsl(220, 38%, 94%)',
                label: 'Light grey'
            },
            {
                color: 'hsl(229, 18%, 70%)',
                label: 'Grey'
            },
            {
                color: 'hsl(208, 100%, 30%)',
                label: 'Blue'
            },
            {
                color: 'hsl(31, 93%, 54%)',
                label: 'Orange'
            },
            {
                color: 'hsl(359, 80%, 59%)',
                label: 'Red'
            },
            {
                color: 'hsl(151, 63%, 50%)',
                label: 'Green'
            },
        ]
    },
	toolbar: {
		items: [
			'heading',
			'|',
            'fontSize',
			'fontColor',
            'fontBackgroundColor',
            'sourceEditing',
			'alignment',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'outdent',
			'indent',
			'|',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo',
			'htmlEmbed'
            
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableProperties',
			'tableCellProperties'
		]
	},
	htmlEmbed: {
		showPreviews: true,
	},
	language: 'en'
};
