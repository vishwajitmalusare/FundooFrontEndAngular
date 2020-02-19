import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  data: any;
  constructor() { }

  ngOnInit() {
  }

  create($event){
    this.data=$event
  }

}
