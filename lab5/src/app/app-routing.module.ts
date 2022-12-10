import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {VibraneComponent} from "./pages/vibrane/vibrane.component";
import {PersonsComponent} from "./pages/persons/persons.component";


const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
