import { Component, Input, OnInit, Output } from '@angular/core';
import * as ClassicEditor from './build/ckeditor';

import {
  ChangeEvent,
  FocusEvent,
  BlurEvent,
} from '@ckeditor/ckeditor5-angular/ckeditor.component';
import Adapter from './ckeditorAdapter';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  public Editor = ClassicEditor;
  public isDisabled = false;
  ckeditor: any;

  public componentEvents: string[] = [];
 postData = {content: '',ckEditorConfig: {} };

 public ckEditorConfig: any;
 constructor() {};
  ngOnInit(): void {
    this.postData.ckEditorConfig = {
      toolbar: {
        items: [
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
          'imageInsert',
          'blockQuote',
          'insertTable',
          'mediaEmbed',
          'undo',
          'redo',
          'restrictedEditingException',
          'superscript',
          'todoList',
          'underline',
          'textPartLanguage',
          'alignment',
          'code',
          'codeBlock',
          'findAndReplace',
          'fontBackgroundColor',
          'fontColor',
          'fontSize',
          'fontFamily',
          'highlight',
          'horizontalLine',

          'pageBreak',
          'removeFormat',
          'sourceEditing',
          'specialCharacters',
          'subscript',
          'strikethrough'
        ]
      },
      language: 'en',
      image: {
        toolbar: [
          'imageTextAlternative',
          'imageStyle:inline',
          'imageStyle:block',
          'imageStyle:side',
          'linkImage'
        ]
      },
      table: {
        contentToolbar: [
          'tableColumn',
          'tableRow',
          'mergeTableCells',
          'tableCellProperties',
          'tableProperties'
        ]
      }
    };
  }

  savePost() {
    console.log(this.postData);
    this.isDisabled = false;
  }

  toggleDisableEditors(): void {
    this.isDisabled = !this.isDisabled;
  }

  onChange(event: ChangeEvent): void {
    this.componentEvents.push('Editor model changed.');
  }

  onFocus(event: FocusEvent): void {
    this.componentEvents.push('Focused the editing view.');
  }

  onBlur(event: BlurEvent): void {
    this.componentEvents.push('Blurred the editing view.');
  }
  onReady(editor) {
    this.componentEvents.push('Editor is Ready ');
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return new Adapter(loader, editor.config);
    };
  }

  
}
