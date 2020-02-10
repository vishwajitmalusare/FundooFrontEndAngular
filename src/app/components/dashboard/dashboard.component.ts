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

  getNotes() {
    this.router.navigate(['/dashboard/createnote'])
  }

  onArchive(){
    this.router.navigate(['dashboard/getArchive'])
  }

  onDelete() {
    this.router.navigate(['dashboard/getTrash'])
  }
  onReminder() {
    alert("Reminder Notes");
  }

  onEditable() {
    alert("Editable for Notes");
   }
   
   onRefresh() {}
}