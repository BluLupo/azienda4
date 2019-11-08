import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoformComponent } from './noform.component';

describe('NoformComponent', () => {
  let component: NoformComponent;
  let fixture: ComponentFixture<NoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
