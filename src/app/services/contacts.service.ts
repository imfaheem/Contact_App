import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ContactsService {

    users: any;
    specificUser: any;
    getUser: Subject<any> = new Subject();

    // Use of Service for API calling in Multiple Components and Modules (if needed)
    constructor( private http: HttpClient) { }


    // Function to Fetch Data from the Mock API
    getContacts(){
        return this.http.get('https://612c8427ab461c00178b5d31.mockapi.io/api/v1/contacts');
    }

    // Function to Pass the Data for Specific User or UserDetail Component
    getSpecificUser(id: string){

        this.specificUser = this.users.find((specificUser: any) => {
            return specificUser.id === id;
        });
        this.getUser.next(this.specificUser);
    }

}
