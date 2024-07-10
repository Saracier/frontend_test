import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdBlockComponent } from './third-block.component';

describe('ThirdBlockComponent', () => {
  let component: ThirdBlockComponent;
  let fixture: ComponentFixture<ThirdBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdBlockComponent]
    });
    fixture = TestBed.createComponent(ThirdBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
