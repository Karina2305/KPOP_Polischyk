import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  inp1: string = '';
  inp2: string = '';
  inp3: string = '';
  inp4: string = '';
  inp5: string = '';
  inp6: string = '';
  inp7: string = '';


  errInp1: string = ''
  errInp2: string = ''
  errInp3: string = ''
  errInp4: string = ''
  errInp5: string = ''
  errInp6: string = ''
  errInp7: string = ''

  errInp8: string = ''


  outRes: string = ''


  op: string = ''

  startsWithCapital(word: string){
    return word.charAt(0) === word.charAt(0).toUpperCase()
  }



  fillOp(str: string){
    this.op = str
  }

  checkVal_() {
    const isNumeric = (n: any) => !isNaN(n);


    let flag1: boolean = false;
    let flag2: boolean = false;
    let flag3: boolean = false;
    let flag4: boolean = false;
    let flag5: boolean = false;
    let flag6: boolean = false;
    let flag7: boolean = false;
    let flag8: boolean = false;

    if (this.inp1 != ''){
      if (this.inp1.length <= 10){
        if (this.startsWithCapital(this.inp1)){
          this.errInp1 = ""
          flag1 = true
        }else{
          this.errInp1 = "Назва повинна бути з великої літери"
        }

      }else{
        this.errInp1 = "Ліміт 10 символів перевищено"
      }
    }else{
      this.errInp1 = "Не заповнене поле"
    }

    if (this.inp2 != ''){
      if (this.inp2.length <= 15){
        if (this.startsWithCapital(this.inp2)){
          this.errInp2 = ""
          flag2 = true
        }else{
          this.errInp2 = "Назва повинна бути з великої літери"
        }

      }else{
        this.errInp2 = "Ліміт 15 символів перевищено"
      }
    }else{
      this.errInp2 = "Не заповнене поле"
    }


    if (this.inp3 != ''){
      if (this.inp3.length <= 20){
        this.errInp3 = ""
       flag3 = true
      }else{
        this.errInp3 = "Ліміт 20 символів перевищено"
      }
    }else{
      this.errInp3 = "Не заповнене поле"
    }


    if (this.inp4 != '') {
      if (!isNumeric(this.inp4)){
        if (this.inp4.length <= 10){
          if (this.startsWithCapital(this.inp4)){
            this.errInp4 = ""
            flag4 = true
          }else{
            this.errInp4 = "Ім'я повинно бути з великої літери (Напр: Вадим)"
          }
        }else{
          this.errInp4 = "Дуже довге ім'я. Ліміт 10 символів (Напр: Вадим)"
        }
      }else{
        this.errInp4 = "Введіть букви, а не числа"
      }

    }else{
      this.errInp4 = "Не заповнене поле"
    }


    if (this.inp5 != '') {
      if (isNumeric(this.inp5)){
        if (this.inp5.length == 10){
          this.errInp5 = ""
          flag5 = true
        }else{

          this.errInp5 = "Введено некоректно номер. Введіть наприклад 0987927190"
        }
      }else{
        this.errInp5 = "Введіть числа, а не букви"
      }
    }else{
      this.errInp5 = "Не заповнене поле"
    }



    if (this.inp6 != '') {
      let regexp1: string = '\\w*@gmail\.com'
      let str1: string = this.inp6;
      let resEx1 = str1.search(regexp1)


      if (resEx1 >= 0) {
        this.errInp6 = ""
        flag6 = true
      } else {
        this.errInp6 = 'Некоректно введена пошта (прик oleg@gmail.com)'
      }

    }else{
      this.errInp6 = "Не заповнене поле"
    }



    if (this.inp7 != ''){
      if (this.inp7.length <= 10){
        if (this.startsWithCapital(this.inp7)){
          this.errInp7 = ""
          flag7 = true
        }else{
          this.errInp7 = "Назва повинна бути з великої літери"
        }

      }else{
        this.errInp7 = "Ліміт 10 символів перевищено"
      }
    }else{
      this.errInp7 = "Не заповнене поле"
    }


    if (this.op != ''){
      this.errInp8 = ""
      flag8 = true
    }else{
      this.errInp8 = "Не вибрана опція"
    }

    if(flag1 && flag2 && flag3 && flag4 && flag5 && flag6 && flag7 && flag8){
      this.outRes = 'Відправлено'
    }

  }















  //
  //
  // checkVal() {
  //
  //   const isNumeric = (n: any) => !isNaN(n);
  //
  //   this.errInp1 = ''
  //   this.errInp2 = ''
  //   this.errInp3 = ''
  //   this.errInp4 = ''
  //   this.errInp5 = ''
  //
  //
  //   let flag1: boolean = false
  //   let flag2: boolean = false
  //   let flag3: boolean = false
  //   let flag4: boolean = false
  //   let flag5: boolean = false
  //
  //
  //
  //
  //   if (this.inp1 != '') {
  //     if (!isNumeric(this.inp1)){
  //       if (this.inp1.length <= 10){
  //         if (this.startsWithCapital(this.inp1)){
  //
  //           flag1 = true
  //         }else{
  //           this.errInp1 = "Ім'я повинно бути з великої літери (Напр: Вадим)"
  //         }
  //       }else{
  //         this.errInp1 = "Дуже довге ім'я. Ліміт 10 символів (Напр: Вадим)"
  //       }
  //     }else{
  //       this.errInp1 = "Введіть букви, а не числа"
  //     }
  //
  //   }else{
  //     this.errInp1 = "Не заповнене поле"
  //   }
  //
  //   if (this.inp2 != '') {
  //     if (this.inp2.length <= 13) {
  //       let regexp2: string = '\\+380\\d{9}'
  //       let str2: string = this.inp2;
  //       let resEx2 = str2.search(regexp2)
  //
  //       if (resEx2 >= 0) {
  //         flag2=true
  //       } else {
  //         this.errInp2 = 'Некоректно введений номер. Повинно (Напр: +380988927192)'
  //       }
  //
  //     } else {
  //       this.errInp2 = "Дуже довгий номер. Ліміт 13 символів (Напр: +380988927192)"
  //     }
  //   } else {
  //     this.errInp2 = "Не заповнене поле"
  //   }
  //
  //
  //
  //   if (this.inp3 != '') {
  //     let regexp3: string = '\\w*@gmail\.com'
  //     let str3: string = this.inp3;
  //     let resEx3 = str3.search(regexp3)
  //
  //
  //     if (resEx3 >= 0) {
  //       flag3=true
  //     } else {
  //       this.errInp3 = 'Некоректно введена пошта (прик oleg@gmail.com)'
  //     }
  //
  //   }else{
  //     this.errInp3 = "Не заповнене поле"
  //   }
  //
  //
  //   if (this.inp4 != '') {
  //
  //     if (isNumeric(this.inp4)){
  //         if (this.inp4.length <= 5){
  //           flag4 = true
  //         }else{
  //           this.errInp4 = "Дуже довге число. Ліміт 5 символі"
  //         }
  //     }else{
  //       this.errInp4 = "Введіть число, а не сроку"
  //     }
  //
  //   }else{
  //     this.errInp4 = "Не заповнене поле"
  //   }
  //
  //
  //   if (this.inp5 != '') {
  //     if (this.inp5.length <=50){
  //       flag5 = true
  //     }else{
  //       this.errInp5 = "Перевищено лімін символів. Лімін 50"
  //     }
  //   }else{
  //     this.errInp5 = "Не заповнене поле"
  //   }
  //
  //
  //   if (flag1 && flag2 && flag3 && flag4 && flag5){
  //     this.outRes = "Відправлено"
  //   }
  //
  // }

}
