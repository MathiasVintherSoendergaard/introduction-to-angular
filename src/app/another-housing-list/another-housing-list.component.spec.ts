import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherHousingListComponent } from './another-housing-list.component';

describe('AnotherHousingListComponent', () => {
  let component: AnotherHousingListComponent;
  let fixture: ComponentFixture<AnotherHousingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherHousingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherHousingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
