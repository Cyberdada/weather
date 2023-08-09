import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CurrentWeatherDetail } from '../../models/currentWeather.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultComponent {
  @Input() current: CurrentWeatherDetail | undefined;
}
