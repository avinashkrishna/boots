import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKeyControlComponent } from './add-key-control.component';

describe('AddKeyControlComponent', () => {
  let component: AddKeyControlComponent;
  let fixture: ComponentFixture<AddKeyControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKeyControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKeyControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
