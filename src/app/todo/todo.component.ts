import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { TodoService } from './todo.service';
import { Subscription } from 'rxjs';
import { AppPaginatorComponent } from '../shared/app-paginator/app-paginator.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
  dataSource = new MatTableDataSource<Todo>([]);
  pageEvent?: PageEvent;
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  todoSubscription!: Subscription

  @ViewChild(AppPaginatorComponent) customPaginator!: AppPaginatorComponent;

  constructor(private todoService: TodoService){}
  ngOnInit(): void {
    this.loadTable()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.customPaginator.paginatorRef;
  }
  handlePageEvent(e: PageEvent) {
    console.log(e)
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  loadTable(): void{
    this.todoSubscription = this.todoService.getAllTodo().subscribe((res: any) => {
    //  console.log(res)
     this.dataSource.data = res
    }, err => {
      console.log(err)
    })
  }
}


export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}