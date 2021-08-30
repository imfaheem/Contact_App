import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ContactsService } from '../../../services/contacts.service';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss']
})

export class UserDetailsComponent implements OnInit {

    @Output() removeClass = new EventEmitter;

    // Define and Initialize Properties for Default Data
    defaultAvatar: string = './../../../assets/images/user-avatar.png';
    fullName: string = 'Firstname Lastname';
    post: string = 'Designation';
    bio: string = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text';
    meeting: string = 'http://www.skypelogin.net/';
    email: string = 'user@email.com';
    dial: string = 'user@msg.com';
    phone: string = '000-111-222';
    specificUser: any;
    

    // Use of Service for get Specific User Data Details
    constructor(private contacts: ContactsService) {

        this.contacts.getUser.subscribe( (res)=> {
            this.specificUser = res;
        });
    }

    // Function to Remove the Class in the CSS
    closeTab(){
        this.removeClass.emit("");
    }

    ngOnInit(): void {
    }

}