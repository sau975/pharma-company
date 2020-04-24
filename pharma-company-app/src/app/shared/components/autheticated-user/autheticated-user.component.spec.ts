import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutheticatedUserComponent } from './autheticated-user.component';

describe('AutheticatedUserComponent', () => {
  let component: AutheticatedUserComponent;
  let fixture: ComponentFixture<AutheticatedUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutheticatedUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutheticatedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
