import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotepadComponent } from './notepad/notepad.component';
import { RouterModule,Routes } from '@angular/router';
import { QuillModule } from 'ngx-quill';



const routes: Routes = [
  {
    path: 'users',
    children: [
      {
        path: 'write',
        component: NotepadComponent,
      },
    ],
  }

]

@NgModule({
  declarations: [
    NotepadComponent
  ],
  imports: [
   [RouterModule.forChild(routes)],
    CommonModule,
    QuillModule.forRoot(),

  ]
})
export class UserWriteModule { }
