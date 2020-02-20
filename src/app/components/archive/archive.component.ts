import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/Service/note.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {


  constructor(private noteservice:NoteService, private http:HttpClient) { }
  notesList:any

  @Input() noteInfo:any
  ngOnInit() {
    this.getArchive();
  }

  getArchive() {
    this.noteservice.getArchiveNotes("note/getarchive").subscribe(
      data => {
        this.notesList=data;
      }
    )
  }
}
