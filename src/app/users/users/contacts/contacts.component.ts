import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Define Property for Dynamic Class Name for Styling
  newClass: string = "";

  // Function for Output Decorator
  getClass(event: any){
      this.newClass = event;
  }

  // Function for Output Decorator
  closeTab(){
      this.newClass = "";
  }

}
