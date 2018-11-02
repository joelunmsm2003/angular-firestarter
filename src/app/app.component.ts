import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';


import { HttpClient } from '@angular/common/http';
import { Http , Response,RequestOptions,Headers } from '@angular/http';
//import { RequestOptions, Headers } from '@angular/http';

import { Injectable } from '@angular/core';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})





export class AppComponent {
  title = 'app';
  constructor(public http: Http,private auth: AuthService) {}


  public authenticate(username, password) {


   console.log('ingresando...')

  let creds = JSON.stringify({ username: username, password: password });




  let options: RequestOptions = new RequestOptions({
      headers: new Headers({ 'Content-Type': 'application/json' })
    });

  this.http.post('http://138.68.230.137:8000/api-token-auth/', creds, options)
    .subscribe(
      data => {

          console.log('status',data.status)

         localStorage.setItem('token', JSON.parse(data["_body"]).token);
       
      },
      error=>{

        console.log(error)
      }
 
    );

}

enviar(){

 
  console.log(localStorage.getItem('token'))
  this.http.get('http://138.68.230.137:8000/miperfil/').subscribe((res) => {
      console.log(res)
    });


}



}
