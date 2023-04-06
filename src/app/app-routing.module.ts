import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './users/add-user/add-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ListViewComponent } from './users/list-view/list-view.component';
import { ViewUserComponent } from './users/view-user/view-user.component';

const routes: Routes = [
   
   
   
   {path: 'users',
      children: [
        {path: '', component: ListViewComponent},
        {path: 'list', component: ListViewComponent},
        {path: 'delete/:id', component: DeleteUserComponent},
        {path: 'edit/:id', component: EditUserComponent },
        {path: 'view/:id', component: ViewUserComponent},
        {path: 'create', component : AddUserComponent},
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
