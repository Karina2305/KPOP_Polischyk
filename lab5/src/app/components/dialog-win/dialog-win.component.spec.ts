import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWinComponent } from './dialog-win.component';

describe('DialogWinComponent', () => {
  let component: DialogWinComponent;
  let fixture: ComponentFixture<DialogWinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogWinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
