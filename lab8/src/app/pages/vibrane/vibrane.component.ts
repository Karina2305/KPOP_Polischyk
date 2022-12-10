import {Component, OnInit} from '@angular/core';
import {IProductChild} from "../../models/childProsucts";

@Component({
  selector: 'app-vibrane',
  templateUrl: './vibrane.component.html',
  styleUrls: ['./vibrane.component.css']
})
export class VibraneComponent implements OnInit {

  str: string[] = [];

  constructor() {
  }

  ngOnInit(): void {

    for (var i = 0; i < localStorage.length; i++) {

      let r: string = localStorage.getItem(localStorage.key(i) + "") + "";
      let r2: IProductChild = JSON.parse(r)

      this.str.push(`${r2.idx} ${r2.name.first} ${r2.name.last}`)
    }

  }

  clearL() {
    localStorage.clear()
    this.str = []
  }

}
