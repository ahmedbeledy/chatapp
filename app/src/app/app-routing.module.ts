import { ChatroomComponent } from './chatroom/chatroom.component';
import { EnterboardComponent } from './enterboard/enterboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [ 
  {path:'', component : EnterboardComponent }, 
  {path:'chat', component : ChatroomComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
