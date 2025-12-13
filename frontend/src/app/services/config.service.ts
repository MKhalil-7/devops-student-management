import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface AppConfig {
  apiUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: AppConfig = {
    apiUrl: environment.apiUrl
  };

  constructor(private http: HttpClient) {}

  loadConfig(): Observable<AppConfig> {
    return this.http.get<AppConfig>('/assets/config.json').pipe(
      map(config => {
        this.config = config;
        return config;
      }),
      catchError(() => {
        // Fallback to environment config if config.json is not available
        return of(this.config);
      })
    );
  }

  getApiUrl(): string {
    return this.config.apiUrl;
  }
}

