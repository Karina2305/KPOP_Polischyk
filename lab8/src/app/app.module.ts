import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewServiceService} from "./services/new-service.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogWinComponent} from './components/dialog-win/dialog-win.component';
import {VibraneComponent} from './pages/vibrane/vibrane.component';
import { PersonsComponent } from './pages/persons/persons.component';
import { CutDatePipe } from './pipes/cut-date.pipe';
import { GlobalErrorComponent } from './components/global-error/global-error.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogWinComponent,
    VibraneComponent,
    PersonsComponent,
    CutDatePipe,
    GlobalErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
  }

}
