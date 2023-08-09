import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { LocationCurrent } from 'src/app/domain/weather/models/location.model';
import { ApplicationHttpError } from 'src/app/shared/applicationError.model';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchLocationComponent {
  theLocation: LocationCurrent | undefined;
  private destroySubject$: Subject<void> = new Subject();
  error$!: Observable<ApplicationHttpError>;
  @Input() set location(value: LocationCurrent | undefined) {
    this.theLocation = value;
    this.isWaiting = false;
  }
  get location(): LocationCurrent | undefined {
    return this.theLocation;
  }
  @Output() locationSelected: EventEmitter<string> = new EventEmitter<string>();

  isSearching = false;
  errorHasOccurred = false;
  isWaiting = false;
  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly errorHandlerService: ErrorHandlerService
  ) {}

  ngOnInit(): void {
    this.error$ = this.errorHandlerService.error$;
    this.error$.pipe(takeUntil(this.destroySubject$)).subscribe((itm) => {
      this.isWaiting = false;
      this.errorHasOccurred = true;
      this.cdr.detectChanges();
    });
  }
  ngOnDestroy(): void {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }

  filterChanged(event: Event): void {
    if (event.target) {
      this.isWaiting = true;
      this.errorHasOccurred = false;
      this.locationSelected.emit(
        (event.target as HTMLInputElement).value.trim()
      );

      this.isSearching = false;
    }
  }
}
