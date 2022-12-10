import { Component } from '@angular/core';

class Student{
  firstname: string;
  lastname: string;
  patronymic: string;
  score: number;

  constructor(firstname: string, lastname: string, patronymic: string, score: number) {

    this.firstname = firstname;
    this.lastname = lastname;
    this.patronymic = patronymic;
    this.score = score
  }
}

@Component({
  selector: 'angular',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  firstname: string
  lastname: string
  patronymic: string
  score: number
  arithmeticmean: number = 0

  items: Student[] = [];
  addItem(firstname: string, lastname: string, patronymic: string, score: number): void {
    if(!firstname || !firstname.trim().length || !lastname || !lastname.trim().length || score <= 0) return
    this.items.push(new Student(firstname, lastname, patronymic && patronymic.trim().length ? patronymic : '---', score))

    this.arithmeticmean = 0
    this.items.forEach(element => { this.arithmeticmean += element.score })
    this.arithmeticmean = this.arithmeticmean / this.items.length

    this.firstname = ''
    this.lastname = ''
    this.patronymic = ''
    this.score = null
  }
}
