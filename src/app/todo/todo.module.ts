import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    TodoRoutingModule,
  ]
})
export class TodoModule { }
