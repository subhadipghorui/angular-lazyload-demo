import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { WordsLimitPipe } from '../shared/word-limit-pipe/wordLimit-pipe.slice';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PostComponent,
    WordsLimitPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule, 
    MatPaginatorModule,
    MatTooltipModule,
    PostRoutingModule
  ],
  providers: [],
})
export class PostModule { }
