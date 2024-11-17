import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  getCounter,
  selectDescription,
} from '../../state/selectors/counter.selector';
import {
  decrement,
  increment,
  multiply,
} from '../../state/actions/counter.action';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-counter-a',
  templateUrl: './counter-a.component.html',
  styleUrl: './counter-a.component.css',
})
export class CounterAComponent implements OnDestroy {
  counter: number = 0;
  description!: string;

  private _destroy$ = new Subject<void>();

  constructor(private _store: Store) {
    this._store
      .select(getCounter)
      .pipe(takeUntil(this._destroy$))
      .subscribe((state) => {
        this.counter = state;
      });

    this._store
      .select(selectDescription)
      .pipe(takeUntil(this._destroy$))
      .subscribe((state) => {
        this.description = state;
      });
  }

  increment() {
    // this.counter = this.counter + 1;
    this._store.dispatch(increment());
  }

  decrement() {
    // this.counter = this.counter - 1;
    this._store.dispatch(decrement());
  }

  multiply() {
    this._store.dispatch(multiply({ num: 5 }));
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
