import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SendDataService } from './send-data.service';
import { Parent2Component } from './parent2/parent2.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Parent2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SendDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
