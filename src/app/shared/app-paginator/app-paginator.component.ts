import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-app-paginator',
  templateUrl: './app-paginator.component.html',
  styleUrls: ['./app-paginator.component.css']
})
export class AppPaginatorComponent {
  pageEvent?: PageEvent;


  @Input() totalItems?: number; // Total number of items
  @Input() pageSize?: number; // Size of each page
  @Input() currentPage: number = 1; // Current page number
  @Output() paginate = new EventEmitter<any>(); // Emits data for pagination

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    console.log(this.pageEvent)
    this.paginate.emit({
      pageIndex:  e.pageIndex + 1, // Convert to 1-based indexing
      pageSize:  e.pageSize
    });
  }
}
