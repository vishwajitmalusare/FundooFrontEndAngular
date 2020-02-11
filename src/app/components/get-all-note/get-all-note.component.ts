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

  ngOnInit() {
    this.getNote();
  }

  getNote() {
    this.noteservice.getAllNotes("note/getnotes?token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmdW5kb29Ob3RlcyIsImp0aSI6IjVlMzkzYjllMGNhNmIxM2M3ZTE5Y2FiOSJ9.LDt_9I50ik2Njs_m53_0q0eiLVDwgIkiYbJmRP5zS2M").subscribe(

      data => {
        this.noteList = data;
        console.log('get all note ==>',data);
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