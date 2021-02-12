import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:3000/', options: {} };
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterboardComponent } from './enterboard/enterboard.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
@NgModule({
  declarations: [
    AppComponent,
    EnterboardComponent,
    ChatroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
