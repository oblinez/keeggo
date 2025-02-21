import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartComponent } from './smart.component';

describe('ResultComponent', () => {
  let component: SmartComponent;
  let fixture: ComponentFixture<SmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
