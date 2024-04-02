import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentInputComponent } from './parent-input/parent-input.component';
import { ChildInputComponent } from './child-input/child-input.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentInputComponent,
    ChildInputComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
