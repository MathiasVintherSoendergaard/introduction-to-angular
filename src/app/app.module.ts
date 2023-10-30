import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import { AnotherHousingListComponent } from './another-housing-list/another-housing-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HousingListComponent,
    AnotherHousingListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
