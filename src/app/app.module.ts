import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertComponent } from './insert/insert.component';
import { DisplayAdminComponent } from './display-admin/display-admin.component';
import { DisplayPassengerComponent } from './display-passenger/display-passenger.component';
import { DeleteAdminComponent } from './delete-admin/delete-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    InsertComponent,
    DisplayAdminComponent,
    DisplayPassengerComponent,
    DeleteAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
