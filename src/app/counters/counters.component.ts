import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../state/models/user.type';
import { Store } from '@ngrx/store';
import { selectUser } from '../state/selectors/user.selector';
import { ageIncrement } from '../state/actions/user.action';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrl: './counters.component.css',
})
export class CountersComponent implements OnInit, OnDestroy {
  user!: User;

  private _destroy$ = new Subject<void>();

  constructor(private _store: Store) {
    this._store
      .select(selectUser)
      .pipe(takeUntil(this._destroy$))
      .subscribe((user) => {
        this.user = user;
      });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this._store.dispatch(ageIncrement());
    }, 5000);
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
