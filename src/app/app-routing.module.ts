import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './config/config/config.component';
import { TodoPageComponent } from './todos/todo-page/todo-page.component';


const routes: Routes = [
  { path: '', component: TodoPageComponent },
  { path: 'config',  component: ConfigComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
