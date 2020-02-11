import { Component, OnInit, Injectable } from '@angular/core';
import { Note } from 'src/app/Model/note';
import { NoteService } from 'src/app/Service/note.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'; 

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.css']
})
export class CreatenoteComponent implements OnInit {

  constructor(private snackbar: MatSnackBar, private noteservice: NoteService, private router: Router) { }
  showAddNote: boolean
  note: Note = new Note();
  createForm: FormGroup;

  ngOnInit() {
    this.showAddNote = false;
    this.createForm = new FormBuilder().group(
      {
        "title": new FormControl(this.note.title, Validators.required),
        "description": new FormControl(this.note.description, Validators.required)
      }
    )
  }
showBar() {
  this.showAddNote = true;
}

close() {
  if(this.createForm.value != null) {
    this.noteservice.createNote("note/createnote", this.createForm.value).subscribe(

      (response: any) => {
        console.log(response)
        if(response.statusCode == 201) {
          console.log(response)
          this.snackbar.open("note created","close",{ duration:2500 })
        }
        else{ 
          console.log(response)
          this.snackbar.open("note not created","close",{ duration:2500 })
        }
      }
    )
    this.showAddNote = false;
  }
  else {
    this.snackbar.open("please enter title and description","open",{ duration: 25000 })
  }
}
}