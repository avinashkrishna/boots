import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalControlsComponent } from './internal-controls.component';

describe('InternalControlsComponent', () => {
  let component: InternalControlsComponent;
  let fixture: ComponentFixture<InternalControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
