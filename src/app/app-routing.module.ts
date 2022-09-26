import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisplayAdminComponent } from './display-admin/display-admin.component';
import { DisplayPassengerComponent } from './display-passenger/display-passenger.component';
import { InsertComponent } from './insert/insert.component';
import { DeleteAdminComponent } from './delete-admin/delete-admin.component';

const routes: Routes = [
  {path:'displayAdmin', component: DisplayAdminComponent},
  {path:'displayPassenger', component: DisplayPassengerComponent},
  {path:'insert', component: InsertComponent},
  {path:'deleteAdmin', component: DeleteAdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
