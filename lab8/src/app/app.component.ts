import {Component, OnInit} from '@angular/core';
import {NewServiceService} from "./services/new-service.service";
import {Observable} from "rxjs";
import {IProduct} from "./models/prosucts";
import {IProductChild} from "./models/childProsucts";
import {MatDialog} from "@angular/material/dialog";
import {DialogWinComponent} from "./components/dialog-win/dialog-win.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']


})



export class AppComponent{
  title = 'my-app';
  flag1: boolean = false;

  constructor() {

  }


}
