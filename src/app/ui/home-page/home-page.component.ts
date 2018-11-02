import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http , Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';


@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public _http: Http) { 


 

  	  
  	  this._http.get('http://estokealo.com:8000/subcategoria/3/1').subscribe((data)  => {


  	  	console.log(JSON.parse(data['_body']))

  	  }, err => console.log(err))



  }

  ngOnInit() {
  }

}
