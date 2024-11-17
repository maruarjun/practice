import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAComponent } from './counter-a.component';
import { StoreModule } from '@ngrx/store';

describe('CounterAComponent', () => {
  let component: CounterAComponent;
  let fixture: ComponentFixture<CounterAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({})
      ],
      declarations: [CounterAComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment counter value', () => {
    component.counter = 0;
    component.increment();
    expect(component.counter).toEqual(1);
  })

  it('should decrement counter value', () => {
    component.counter = 1;
    component.decrement();
    expect(component.counter).toEqual(0);
  })
});
