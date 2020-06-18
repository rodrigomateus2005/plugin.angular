import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibTwoComponent } from './my-lib-two.component';

describe('MyLibTwoComponent', () => {
  let component: MyLibTwoComponent;
  let fixture: ComponentFixture<MyLibTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLibTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLibTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
