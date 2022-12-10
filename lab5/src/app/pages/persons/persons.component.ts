import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../models/prosucts";
import {NewServiceService} from "../../services/new-service.service";
import {MatDialog} from "@angular/material/dialog";
import {IProductChild} from "../../models/childProsucts";
import {DialogWinComponent} from "../../components/dialog-win/dialog-win.component";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  title = 'my-app';
  responses: IProduct;



  constructor(public newServiceService: NewServiceService, public dialog: MatDialog) {

  }

  vivod(){
    this.newServiceService.getAll().subscribe((response) => {
      // this.responses[0] = response
      this.responses = response;
      console.log(this.responses)
    })
  }

  ngOnInit(): void {
    this.vivod()


  }

  openDialog(elems: IProductChild, i: number) {

    elems.idx = i;

    const dialogRef = this.dialog.open(DialogWinComponent, {
      data: elems
    });

  }

}
