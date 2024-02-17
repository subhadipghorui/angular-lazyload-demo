import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'post', loadChildren: () => import('./post/post.module').then(m => m.PostModule) },
      { path: 'todo', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule) },
    ]
  },
  
    { path: '', redirectTo: '/post', pathMatch: 'full' },
    { path: '**', redirectTo: '/post' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
