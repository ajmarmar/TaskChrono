import { Injectable } from '@angular/core';
import { Config } from '../models/config.models';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public getDayOfWeek(): string[] {
    return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  }

  public saveConfig(config: Config) {
    localStorage.setItem('config', JSON.stringify(config));
  }

  public getConfig(): Config {
    const cfg = localStorage.getItem('config');
    return cfg ? JSON.parse(cfg) : new Config();
  }
}
