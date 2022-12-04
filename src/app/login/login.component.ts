import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username=""
  password=""



  constructor(private route:Router){}

  readValues=()=>{
    if (this.username=="admin" && this.password=="12345") {

      this.route.navigate(['/add'])
      
    } else {
      alert("Invalid Credential")
    }
  }



}
