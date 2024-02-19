import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-app-paginator',
  template: `
    <mat-paginator
      #paginatorRef
      [pageSizeOptions]="pageSizeOptions"
      (page)="handlePageEvent($event)"
      showFirstLastButtons
      [length]="length"
      [pageSize]="pageSize"
      [pageIndex]="pageIndex"
      aria-label="Select page of periodic elements"
    ></mat-paginator>
  `,
  styleUrls: ['./app-paginator.component.css'],
})
export class AppPaginatorComponent implements OnInit {
  @Input() pageSizeOptions: number[] = [5, 10, 20];
  @Input() length: number = 0;
  @Input() pageSize: number = 5;
  @Input() pageIndex: number = 0;
  @Input() id: string = "app";
  @Output() pageChanged = new EventEmitter<any>();

  @ViewChild(MatPaginator) paginatorRef!: MatPaginator;

  ngOnInit() {
    if(localStorage.getItem('angular_'+this.id+'_page_number')){
      this.pageSize = Number(localStorage.getItem('angular_'+this.id+'_page_number'))
    }else{
      localStorage.setItem('angular_'+this.id+'_page_number', String(this.pageSize))
    }
  }
  

  handlePageEvent(e: PageEvent){
    this.pageChanged.emit(e)
    localStorage.setItem('angular_'+this.id+'_page_number', String(e.pageSize))
  }
}
