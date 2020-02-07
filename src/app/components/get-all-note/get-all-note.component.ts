import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-all-note',
  templateUrl: './get-all-note.component.html',
  styleUrls: ['./get-all-note.component.css']
})
export class GetAllNoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
/*
import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/core/service/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  constructor(private noteservice: NoteService, private snackbar: MatSnackBar,
    private dialog: MatDialog) { }

  noteList: any;

  ngOnInit() {
    this.getNote();
  }

  getNote() {
    this.noteservice.getAllNotes("Note/GetAllNotes").subscribe(
      data => {
        this.noteList = data;
        console.log('get all note ==>', data);
      }
    )
  }

  openDialog(note: any) {
    const ref = this.dialog.open(UpdateNoteComponent, {

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
*/