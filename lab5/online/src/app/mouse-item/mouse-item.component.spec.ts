import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseItemComponent } from './mouse-item.component';

describe('MouseItemComponent', () => {
  let component: MouseItemComponent;
  let fixture: ComponentFixture<MouseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouseItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
