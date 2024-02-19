import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPaginatorComponent } from './app-paginator/app-paginator.component';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [AppPaginatorComponent],
  imports: [
    CommonModule,
    MatPaginatorModule
  ],
  exports: [
    AppPaginatorComponent
  ]
})
export class SharedModule { }
