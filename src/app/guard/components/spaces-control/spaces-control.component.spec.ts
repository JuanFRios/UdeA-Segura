import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacesControlComponent } from './spaces-control.component';

describe('SpacesControlComponent', () => {
  let component: SpacesControlComponent;
  let fixture: ComponentFixture<SpacesControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacesControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacesControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
