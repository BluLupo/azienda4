import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YesformComponent } from './yesform.component';

describe('YesformComponent', () => {
  let component: YesformComponent;
  let fixture: ComponentFixture<YesformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YesformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
