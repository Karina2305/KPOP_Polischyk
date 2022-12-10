import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VibraneComponent } from './vibrane.component';

describe('VibraneComponent', () => {
  let component: VibraneComponent;
  let fixture: ComponentFixture<VibraneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VibraneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VibraneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
