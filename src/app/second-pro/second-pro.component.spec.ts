import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondProComponent } from './second-pro.component';

describe('SecondProComponent', () => {
  let component: SecondProComponent;
  let fixture: ComponentFixture<SecondProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondProComponent]
    });
    fixture = TestBed.createComponent(SecondProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
