import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { SubclassComponent } from './routes/subclass/subclass.component';
import { ViewDetailsComponent } from './routes/view-details/view-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SubclassComponent,
    ViewDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
