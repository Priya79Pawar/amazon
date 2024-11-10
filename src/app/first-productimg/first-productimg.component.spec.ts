import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstProductimgComponent } from './first-productimg.component';

describe('FirstProductimgComponent', () => {
  let component: FirstProductimgComponent;
  let fixture: ComponentFixture<FirstProductimgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstProductimgComponent]
    });
    fixture = TestBed.createComponent(FirstProductimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
