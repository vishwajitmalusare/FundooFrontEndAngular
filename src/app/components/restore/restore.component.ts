import { Component, OnInit, Inject, Input } from '@angular/core';
import { NoteService } from 'src/app/Service/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-restore',
  templateUrl: './restore.component.html',
  styleUrls: ['./restore.component.css']
})
export class RestoreComponent implements OnInit {

  constructor(private noteService: NoteService, private snackBar: MatSnackBar) { }

  @Input() noteInfo:any
  ngOnInit() {
  }

  onRestore() {
    this.noteService.trashUnTrashNote("note/trashanduntrash?noteId="+this.noteInfo.noteId).subscribe(
      (response: any): any => {
        if(response.statusCode==200) {
          this.snackBar.open("note restored","close", { duration:2500 })
        }
        else {
          this.snackBar.open(response.message,"close",{duration:2500})
        }
      }
    )
  }
  onDelete() {
    this.noteService.deleteNote("note/deletenote?noteId="+this.noteInfo.noteId).subscribe(
      (response: any): any => {
        if(response.statusCode==200) {
          this.snackBar.open("note deleted permenntly","close", { duration:2500 })
        }
        else {
          this.snackBar.open("note not in trash","close",{duration:2500})
        }
      }
    )
  }
}