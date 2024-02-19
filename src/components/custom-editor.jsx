// components/custom-editor.js

import React from 'react';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "@ckeditor/ckeditor5-build-classic"; // Import the CKEditor 5 build

const editorConfiguration = {
    toolbar: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'outdent',
        'indent',
        '|',
        'imageUpload',
        'blockQuote',
        'insertTable',
        'mediaEmbed',
        'undo',
        'redo'
    ]
};

function CustomEditor( props ) {
    return (
        <CKEditor
            editor={ Editor }
            config={ editorConfiguration }
            data={ props.initialData }
            disabled
            disableWatchdog
            onChange={ (event, editor ) => {
                const data = editor.getData();
                console.log( { event, editor, data } );
            } }
        />
    );
}

export default CustomEditor;
