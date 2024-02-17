import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    MatTableModule, 
    MatPaginatorModule,
    PostRoutingModule
  ]
})
export class PostModule { }
