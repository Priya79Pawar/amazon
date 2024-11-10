import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdProComponent } from './third-pro.component';

describe('ThirdProComponent', () => {
  let component: ThirdProComponent;
  let fixture: ComponentFixture<ThirdProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdProComponent]
    });
    fixture = TestBed.createComponent(ThirdProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
