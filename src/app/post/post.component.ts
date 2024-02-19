import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  dataSource = new MatTableDataSource<Post>([]);

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  pageEvent?: PageEvent;
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  postSubscription: Subscription|undefined

  constructor(private postService: PostService){}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator ?? null;
    console.log("ngAfterViewInit")
  }
  ngOnInit(): void {
    console.log("ngOnInit")
    this.loadTable()
  }
  ngOnDestroy(): void {
    this.postSubscription?.unsubscribe();
  }


  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  loadTable(): void{
    this.postSubscription = this.postService.getAllJob().subscribe((res: any) => {
     console.log(res)
     this.dataSource.data = res
    }, err => {
      console.log(err)
    })
  }
}
export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

const ELEMENT_DATA: Post[] = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "body": "delectus aut autem"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "body": "delectus aut autem"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "body": "delectus aut autem"
  }
]