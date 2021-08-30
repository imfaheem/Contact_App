import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'contacts',
        pathMatch: 'full'
    },
    {
        path: 'contacts',
        loadChildren: ()=> import('./users/users/users.module').then(mod=>mod.UsersModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
