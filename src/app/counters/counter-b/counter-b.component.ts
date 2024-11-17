import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  getCounter,
  selectDescription,
} from '../../state/selectors/counter.selector';
import { decrement, increment } from '../../state/actions/counter.action';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-counter-b',
  templateUrl: './counter-b.component.html',
  styleUrl: './counter-b.component.css',
})
export class CounterBComponent implements OnDestroy {
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
    this._store.dispatch(increment());
  }

  decrement() {
    this._store.dispatch(decrement());
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
