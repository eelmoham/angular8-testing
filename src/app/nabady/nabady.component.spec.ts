import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NabadyComponent } from './nabady.component';

describe('NabadyComponent', () => {
  let component: NabadyComponent;
  let fixture: ComponentFixture<NabadyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NabadyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NabadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
