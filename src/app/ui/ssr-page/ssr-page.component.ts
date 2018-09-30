import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { GoogleMapsAPIWrapper } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmCoreModule } from '@agm/core';
import { HaversineService } from 'ng2-haversine';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAqxjtsvw8b-EVZ1sPk1ZJ8dh8jKl7eDU0'
    }),
    AgmJsMarkerClustererModule
  ],
  providers: [GoogleMapsAPIWrapper, HaversineService],
  bootstrap: [AppComponent]
})
export class AppModule { }

