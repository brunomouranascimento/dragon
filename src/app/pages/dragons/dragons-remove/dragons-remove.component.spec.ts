import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonsRemoveComponent } from './dragons-remove.component';

describe('DragonsRemoveComponent', () => {
  let component: DragonsRemoveComponent;
  let fixture: ComponentFixture<DragonsRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonsRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonsRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
