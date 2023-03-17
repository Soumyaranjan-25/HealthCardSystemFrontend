import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApplyCardComponent } from './view-apply-card.component';

describe('ViewApplyCardComponent', () => {
  let component: ViewApplyCardComponent;
  let fixture: ComponentFixture<ViewApplyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewApplyCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewApplyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
