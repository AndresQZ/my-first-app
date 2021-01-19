import { Component } from '@angular/core';
import {UserService} from './user.service';
import { Data } from './Data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
 
  data : Data;
  constructor(private usersService: UserService) {}

  ngOnInit() {   
    this.getUsers();  
 }

  public getUsers() {

    this.usersService.getUser().subscribe(response => { 
  
      this.data = response;
      console.log(this.data);
      alert(JSON.stringify(this.data));
     });

  }
}
