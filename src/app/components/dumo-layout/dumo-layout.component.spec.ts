import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumoLayoutComponent } from './dumo-layout.component';

describe('DumoLayoutComponent', () => {
  let component: DumoLayoutComponent;
  let fixture: ComponentFixture<DumoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DumoLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DumoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
