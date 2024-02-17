import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    MatTableModule, 
    MatPaginatorModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
