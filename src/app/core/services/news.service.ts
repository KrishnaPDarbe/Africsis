import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AfricsisNews } from '../model/arricsisNews';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private _http: HttpClient) {}

  getNewsData() {
    return this._http.get<Array<AfricsisNews>>(
      './assets/core/metadata/africsisToday.json'
    );
  }

  getCounterData() {
    return this._http.get<Array<AfricsisNews>>(
      './assets/core/metadata/countercard.json'
    );
  }

  getServicesDate() {
    return this._http.get<Array<AfricsisNews>>(
      './assets/core/metadata/services.json'
    );
  }

  getProgramsData() {
    return this._http.get<Array<AfricsisNews>>(
      './assets/core/metadata/programs.json'
    );
  }

  getEventsData() {
    return this._http.get<Array<AfricsisNews>>(
      './assets/core/metadata/events.json'
    );
  }
}
