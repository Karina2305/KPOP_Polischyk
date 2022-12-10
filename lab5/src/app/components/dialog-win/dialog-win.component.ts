import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {IProductChild} from "../../models/childProsucts";

@Component({
  selector: 'app-dialog-win',
  templateUrl: './dialog-win.component.html',
  styleUrls: ['./dialog-win.component.css']
})
export class DialogWinComponent implements OnInit {


  ngOnInit(): void {
  }

  constructor(
    // public dialogRef: MatDialogRef<DialogWinComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IProductChild,
  ) {}

  addIzbranne(elems: IProductChild){
    let temp: string = elems.idx + ""

    localStorage.setItem(temp, JSON.stringify(elems))
  }
}
