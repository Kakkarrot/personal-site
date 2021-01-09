import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtracurricularsComponent } from './extracurriculars.component';

describe('ExtracurricularsComponent', () => {
  let component: ExtracurricularsComponent;
  let fixture: ComponentFixture<ExtracurricularsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtracurricularsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtracurricularsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
