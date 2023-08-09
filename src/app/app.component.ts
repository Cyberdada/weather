import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ErrorHandlerService } from './shared/error-handler.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ApplicationHttpError } from './shared/applicationError.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  private destroySubject$: Subject<void> = new Subject();
  error$!: Observable<ApplicationHttpError>;
  constructor(private readonly errorHandlerService: ErrorHandlerService) {}

  ngOnInit(): void {
    this.error$ = this.errorHandlerService.error$;
    this.error$.pipe(takeUntil(this.destroySubject$)).subscribe((itm) =>
      alert(`Error occured: ${itm.message}
      params ${itm.params}`)
    );
  }
  ngOnDestroy(): void {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }
}
