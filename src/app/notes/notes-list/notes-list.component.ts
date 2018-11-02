import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  notes: Observable<any[]>;
  locales: Observable<any[]>;
  productos: Observable<any[]>;
  modelos: Observable<any[]>;
  content: string;
  user:any={}

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notes = this.notesService.getData();
    this.locales = this.notesService.getLocales();
    this.productos = this.notesService.getProductos();
     this.modelos = this.notesService.getModelos();

    console.log('locales',this.locales)
    console.log('prodcutos',this.productos)
  }

  clickHandler(user) {
    this.notesService.createNote(user);
    this.content = '';
  }

}
