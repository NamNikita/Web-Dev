import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadphoneItemComponent } from './headphone-item.component';

describe('HeadphoneItemComponent', () => {
  let component: HeadphoneItemComponent;
  let fixture: ComponentFixture<HeadphoneItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadphoneItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadphoneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
