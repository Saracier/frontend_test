import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondBlockComponent } from './second-block.component';

describe('SecondBlockComponent', () => {
  let component: SecondBlockComponent;
  let fixture: ComponentFixture<SecondBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondBlockComponent]
    });
    fixture = TestBed.createComponent(SecondBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
