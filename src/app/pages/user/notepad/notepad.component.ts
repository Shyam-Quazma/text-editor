import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { QuillTextArea, QuillHeading } from 'src/assets/quillconfig.module';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit {
  quillConfiguration = QuillTextArea
  quillHeading=QuillHeading
  @Input() control!: FormControl

  ngOnInit() {
    this.control = this.control ?? new FormControl()
  }

}