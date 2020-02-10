import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Service/note.service'

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {

  notesList:any
  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.getTrash();
  }

  getTrash() {
    this.noteService.getTrashNotes("note/gettrash").subscribe(
      data => {
        this.notesList= data;
        console.log('get trash note =>', data);
      }
    )
  }
}