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
      {colorName: "orange", colorCode: "#ffa500" },
      {colorName: 'grey', colorCode: '808080' }
    ],
    [
      { colorName: "lime", colorCode: " #00FF00" },
      { colorName: 'indian red', colorCode: '#CD5C5C' },
      { colorName: 'crimson', colorCode: '#DC143C' },
      { colorName: 'yellow', colorCode: '#FFF00' }
    ],
    [
      { colorName: 'Purple', colorCode: '#80080'} ,
      { colorName: 'Teal', colorCode: '#008080' },
      { colorName: "blue", colorCode: "#0000FF" },
      { colorName: 'light blue', colorCode: '#ADD8E6' }
    ]
  ]

  @Input() noteInfo: any

// Work on it 
//  onColor(noteColor) {
//     let data={
//       color:noteColor.colorName,
//       noteId:this.noteInfo.noteId
//     }
//  this.noteService.setColorToNote("note/setColor?color="+data.color,data.noteId).subscribe()
//   }
  onTrash() {
    this.noteService.trashUnTrashNote("note/trashanduntrash?noteId="+this.noteInfo.noteId).subscribe(

      (response: any): any => {
        if(response.statuscode == 200) {
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
        if(response.statuscode == 200) {
          this.snackbar.open("note is archive","close", { duration: 2500 })
        }
      }
    )
  }
}