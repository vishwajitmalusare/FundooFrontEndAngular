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
    this.router.navigate(['/dashboard/note'])
  }

  onArchive(){
    this.router.navigate(['/dashboard/getarchive'])
  }

  onDelete() {
    this.router.navigate(['/dashboard/gettrash'])
  }
  onReminder() {
    alert("Reminder Notes");
  }

  onEditLabel() {
    alert("Editable for Notes");
   }
   
   onRefresh() {}
}