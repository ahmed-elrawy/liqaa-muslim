import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MawakeetElsalahComponent } from './mawakeet-elsalah.component';

describe('MawakeetElsalahComponent', () => {
  let component: MawakeetElsalahComponent;
  let fixture: ComponentFixture<MawakeetElsalahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MawakeetElsalahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MawakeetElsalahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
