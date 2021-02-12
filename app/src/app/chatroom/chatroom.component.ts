import { message } from './../data/message';
import { Socket } from 'ngx-socket-io';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { room } from '../data/room';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  message :message []=[]
  room:room[]=[]
  constructor(private route: ActivatedRoute, private router: Router,private socket:Socket) { }

  ngOnInit(): void {

    let obj =this.getuser()

   
    this.socket.emit('join', (obj),(error:any)=> {
      if (error) {
         this.router.navigateByUrl('')
      }
    })
    this.socket.on('message' ,(resolve: message)=>{
  this.message.push(resolve)
  console.log(this.message)

       
      }
    )
    this.socket.on('roomData', (obj:room) => {
      this.room.push(obj)

    
  })
  console.log(this.room)
    
    
  

} 
  
sendmessage(resolve:string){
  this.socket.emit('sendMessage',(resolve), (error:any)  => {
   
    if (error) {
        return console.log(error)
    }

    console.log('Message delivered!')
})
}
  getuser(){
    let obj={}
      this.route.queryParamMap.subscribe(next=>{next.keys
   
       obj ={
        "username":next.get('username'),
        "room":next.get('room')
      }
           
    });
    return obj
    
    }
  
  }