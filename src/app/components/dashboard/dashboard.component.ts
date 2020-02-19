import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  fundooTitle = 'FundooNotes';

  constructor(private router: Router) { }

  ngOnInit() { }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  //Understand this
  getNotes() {
    this.router.navigate(['/createnote'])
  }

  onArchive(){
    this.router.navigate(['/getarchive'])
  }

  onDelete() {
    this.router.navigate(['/gettrash'])
  }
  onReminder() {
    alert("Reminder Notes");
  }

  onEditLabel() {
    alert("Editable for Notes");
   }
   
   onRefresh() {}

   onNoteToPdf() {
     this.router.navigate(['/notetopdf'])
   }
}