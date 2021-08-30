import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ContactBarComponent } from './contact-bar/contact-bar.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ContactsComponent } from './contacts/contacts.component';


@NgModule({
    declarations: [
        ContactBarComponent,
        ContactListComponent,
        UserDetailsComponent,
        ContactsComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule
    ]
})

export class UsersModule { }
