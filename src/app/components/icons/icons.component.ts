import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/Service/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  constructor(private snackbar: MatSnackBar, private noteService: NoteService) { }
  labelList: any;
  noteLabelList: any;
  message: any;

  ngOnInit() {
  }

  colors = [

    [
      {colorName: "white", colorCode: '#FFFFFF'},
      {colorName: 'green', colorCode: '#008000' },
      {colorName: 'grey', colorCode: '808080' }
    ],
    [
      { colorName: 'indian red', colorCode: '#CD5C5C' },
      { colorName: 'crimson', colorCode: '#DC143C' },
      { colorName: 'yellow', colorCode: '#FFF00' }
    ],
    [
      { colorName: 'Purple', colorCode: '#80080'} ,
      { colorName: 'Teal', colorCode: '#008080' },
      { colorName: 'light blue', colorCode: '#ADD8E6' }
    ]
  ]

  @Input() noteInfo: any

  onTrash() {
    this.noteService.trashUnTrashNote("note/trashanduntrash?noteId="+this.noteInfo.noteId).subscribe(

      (response: any): any => {
        if(response.statusCode == 301) {
          this.snackbar.open("note is trashed","close", { duration: 2500 });
        }
        else {
          this.snackbar.open("note  is untrashed", "close", { duration: 2500 })
        }
      }
    )
  }

  onArchive(){
    this.noteService.archivedUnarchiveNote("note/archiveandunarchive?noteId="+this.noteInfo.noteId).subscribe(
      (response: any): any => {
        if(response.statusCode == 200) {
          this.snackbar.open(response.statusMessage,"close", { duration: 2500 })
        }
      }
    )
  }
}