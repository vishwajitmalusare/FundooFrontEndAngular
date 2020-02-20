import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/Service/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})


export class IconsComponent implements OnInit {
  
  color: string="";
  @Output() colorEmmiter = new EventEmitter<string>();

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
      { colorName: 'yellow', colorCode: '#ffff00' }
    ],
    [
      { colorName: 'Purple', colorCode: '#6a0dad'} ,
      { colorName: 'Teal', colorCode: '#008080' },
      { colorName: "blue", colorCode: "#0000FF" },
      { colorName: 'light blue', colorCode: '#ADD8E6' }
    ]
  ]

  @Input() noteInfo: any

onColor(noteColor) {
    let data={
      color:noteColor
    }
    this.color=noteColor;
    console.log(noteColor);
    console.log(this.color);
     this.colorEmmiter.emit(this.color);

 this.noteService.setColorToNote("note/setColor?noteId="+this.noteInfo.noteId,data).subscribe(
   
  (response: any): any => {
     if(response.statuscode == 200) {
       this.snackbar.open("note is colored","close",{ duration: 2500 });
     }
   }
 )
  }
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