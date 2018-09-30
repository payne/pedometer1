import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AngularFirestore } from 'angularfire2/firestore';

import { tap, startWith } from 'rxjs/operators';
import { TransferState, makeStateKey } from '@angular/platform-browser';

import { AgmCoreModule } from '@agm/core';
import { GoogleMapsAPIWrapper, PolyMouseEvent } from '@agm/core';
import { HaversineService, GeoCoord } from 'ng2-haversine';

@Component({
  selector: 'ssr-page',
  templateUrl: './ssr-page.component.html',
  styleUrls: ['./ssr-page.component.scss']
})
export class SsrPageComponent {
  title = 'app';
  distance = 0.0;
  lat = 41.25236;
  lng = -96.001897;
  mapTypeId = 'terrain';
  kmlurl = 'http://MattPayne.org/agm-pedometer2/Friday.kml';
  kmlurlSaturday = 'http://MattPayne.org/agm-pedometer2/Saturday.kml';
  mapPointer: MarkerType[] = [];

  constructor(private harversinceService: HaversineService) {}

  mClick(e: any) {
    this.mapPointer.push({ latitude: e.coords.lat, longitude: e.coords.lng });
    // https://github.com/vermicida/ng2-haversine
    if (this.mapPointer.length > 1) {
      const previous = this.mapPointer[this.mapPointer.length - 2];
      const current = this.mapPointer[this.mapPointer.length - 1];
      this.distance += this.harversinceService.getDistanceInMiles(
        previous,
        current
      );
    }
  }
}

// just an interface for type safety.
interface MarkerType {
  latitude: number;
  longitude: number;
}
