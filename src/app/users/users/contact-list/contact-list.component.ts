import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactsService } from '../../../services/contacts.service';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss']
})

export class ContactListComponent implements OnInit {

    // Created Output Decorator for Parent to Child Access
    @Output() newClass = new EventEmitter;
    
    users: any;

    // Use of Service to get Contact list
    constructor(private contacts: ContactsService) {
        this.contacts.getContacts().subscribe((res) =>{
            this.contacts.users = res;
            this.users = res;
        });
    }

    // Function to Get Specific User Data
    getData(userId: string){
        this.newClass.emit("on-active");
        this.contacts.getSpecificUser(userId);   
    }

    ngOnInit(): void {
    }

}
