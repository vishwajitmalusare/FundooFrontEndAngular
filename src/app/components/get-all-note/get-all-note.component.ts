import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Service/note.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-get-all-note',
  templateUrl: './get-all-note.component.html',
  styleUrls: ['./get-all-note.component.css']
})
export class GetAllNoteComponent implements OnInit {

  constructor(private noteservice: NoteService, private dialog: MatDialog) { }

  noteList: any;
  //set color
  color: string;
  receiveColor($event){
this.color = $event
  }

  ngOnInit() {
    this.getNote();
  }

  getNote() {
    this.noteservice.getAllNotes("note/getnotes").subscribe(

      data => {
        this.noteList = data;
      }
    )
  }

  openDialog(note: any) {
    const ref = this.dialog.open(UpdateNoteComponent,{
      width: "458px",
      height: "259px",

      data: {
        noteId: note.noteId,
        title: note.title,
        description: note.description
      }
    })
  }
}