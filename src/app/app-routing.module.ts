import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './layout/body/body.component';
import { CommentsComponent } from './components/comments/comments.component';


const routes: Routes = [
  {
    path: '', component: BodyComponent,
    children: [{path:'', component: CommentsComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
