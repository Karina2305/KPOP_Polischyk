import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';

describe('AppComponent', () => {

  let appComponent: AppComponent;

  beforeEach(() => {
    appComponent = new AppComponent();
  })


  it('повинен створювати екземпляр класа', () => {
    expect(appComponent).toBeTruthy();
  });

  it('перевірка поля "Наименование" на не заповнене поле', () => {
    appComponent.inp1 = ''
    appComponent.checkVal_()
    let errL = appComponent.errInp1
    expect(errL).toBe('Не заповнене поле');
  })


  it('перевірка поля "Наименование" на перевищений ліміт 10 символів', () => {
    appComponent.inp1 = 'уркстройууауауауауауауауа'
    appComponent.checkVal_()
    let errL = appComponent.errInp1
    expect(errL).toBe('Ліміт 10 символів перевищено');
  })


  it('перевірка поля "Наименование" на не введену першу велику літеру', () => {
    appComponent.inp1 = 'уркстрой'
    appComponent.checkVal_()
    let errL = appComponent.errInp1
    expect(errL).toBe('Назва повинна бути з великої літери');
  })

  it('перевірка поля "Наименование" на правильність вводу', () => {
    appComponent.inp1 = 'Уркстрой'
    appComponent.checkVal_()
    let errL = appComponent.errInp1
    expect(errL).toBe('');
  })


  it('перевірка поля "Город" на не заповнене поле', () => {
    appComponent.inp2 = ''
    appComponent.checkVal_()
    let errL = appComponent.errInp2
    expect(errL).toBe('Не заповнене поле');
  })


  it('перевірка поля "Город" на на перевищений ліміт 15 символів', () => {
    appComponent.inp2 = 'київввввввввввввввввввввввввввввввввв'
    appComponent.checkVal_()
    let errL = appComponent.errInp2
    expect(errL).toBe('Ліміт 15 символів перевищено');
  })


  it('перевірка поля "Город" на не введену першу велику літеру', () => {
    appComponent.inp2 = 'київ'
    appComponent.checkVal_()
    let errL = appComponent.errInp2
    expect(errL).toBe('Назва повинна бути з великої літери');
  })


  it('перевірка поля "Город" на правильність вводу', () => {
    appComponent.inp2 = 'Київ'
    appComponent.checkVal_()
    let errL = appComponent.errInp2
    expect(errL).toBe('');
  })

  it('перевірка поля "Адрес" на не заповнене поле', () => {
    appComponent.inp3 = ''
    appComponent.checkVal_()
    let errL = appComponent.errInp3
    expect(errL).toBe('Не заповнене поле');
  })

  it('перевірка поля "Адрес" на перевищений ліміт 20 символів', () => {
    appComponent.inp3 = 'вул Київскакакакаккккккккккккккккккккккккккккккакакакакакаака'
    appComponent.checkVal_()
    let errL = appComponent.errInp3
    expect(errL).toBe('Ліміт 20 символів перевищено');
  })

  it('перевірка поля "Адрес" на правильність вводу', () => {
    appComponent.inp3 = 'вул київська 20а'
    appComponent.checkVal_()
    let errL = appComponent.errInp3
    expect(errL).toBe('');
  })


  it('перевірка поля "Контактное лицо" на не заповнене поле', () => {
    appComponent.inp4 = ''
    appComponent.checkVal_()
    let errL = appComponent.errInp4
    expect(errL).toBe('Не заповнене поле');
  })


  it('перевірка поля "Контактное лицо" на не дозволенні введені числа', () => {
    appComponent.inp4 = '343434343'
    appComponent.checkVal_()
    let errL = appComponent.errInp4
    expect(errL).toBe('Введіть букви, а не числа');
  })

  it('перевірка поля "Контактное лицо" на перевищений ліміт 10 символів', () => {
    appComponent.inp4 = 'Вадимммммммммммммммммммммммммммммммммм'
    appComponent.checkVal_()
    let errL = appComponent.errInp4
    expect(errL).toBe('Дуже довге ім\'я. Ліміт 10 символів (Напр: Вадим)');
  })

  it('перевірка поля "Контактное лицо" на не введену першу велику літеру', () => {
    appComponent.inp4 = 'вадим'
    appComponent.checkVal_()
    let errL = appComponent.errInp4
    expect(errL).toBe('Ім\'я повинно бути з великої літери (Напр: Вадим)');
  })


  it('перевірка поля "Контактное лицо" на правильність вводу', () => {
    appComponent.inp4 = 'Вадим'
    appComponent.checkVal_()
    let errL = appComponent.errInp4
    expect(errL).toBe('');
  })


  it('перевірка поля "Телефон" на не заповнене поле', () => {
    appComponent.inp5 = ''
    appComponent.checkVal_()
    let errL = appComponent.errInp5
    expect(errL).toBe('Не заповнене поле');
  })


  it('перевірка поля "Телефон" на не дозволені введені букви замість цифр', () => {
    appComponent.inp5 = 'уауауауауа'
    appComponent.checkVal_()
    let errL = appComponent.errInp5
    expect(errL).toBe('Введіть числа, а не букви');
  })

  it('перевірка поля "Телефон" на не введений коректно номер', () => {
    appComponent.inp5 = '343434334'
    appComponent.checkVal_()
    let errL = appComponent.errInp5
    expect(errL).toBe('Введено некоректно номер. Введіть наприклад 0987927190');
  })

  it('перевірка поля "Телефон" на правильність вводу', () => {
    appComponent.inp5 = '0987927190'
    appComponent.checkVal_()
    let errL = appComponent.errInp5
    expect(errL).toBe('');
  })


});
