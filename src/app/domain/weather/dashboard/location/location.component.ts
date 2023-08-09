import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LocationCurrent } from '../../models/location.model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent {
  @Input() location: LocationCurrent | undefined;
  @Input() isWaiting = false;
  @Input() errorHasOccurred = false;
}
