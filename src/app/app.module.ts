import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './domain/weather/dashboard/search/search.component';
import { ResultComponent } from './domain/weather/dashboard/result/result.component';
import { OverviewComponent } from './domain/weather/dashboard/overview/overview.component';

import { LocationComponent } from './domain/weather/dashboard/location/location.component';
import { SharedModule } from './shared/shared.module';
import { SearchLocationComponent } from './domain/weather/dashboard/search-location/search-location.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchLocationComponent,
    ResultComponent,
    OverviewComponent,
    LocationComponent,
  ],
  imports: [SharedModule, BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
