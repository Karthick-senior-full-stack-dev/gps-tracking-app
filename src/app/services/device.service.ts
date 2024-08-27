// src/app/services/device.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private devicesUrl = 'https://connect.paj-gps.de/api/device';
  private trackingDataUrl = 'https://connect.paj-gps.de/api/trackerdata/';

  constructor(private http: HttpClient) { }

  getDevices(token: string): Observable<{ success: any[]; number_of_records: number }> {
    return this.http.get<{ success: any[]; number_of_records: number }>(this.devicesUrl, { headers: { Authorization: `Bearer ${token}` } });
  }

  getTrackingData(deviceId: string, token: string): Observable<{ success: any[]}> {
    return this.http.get<{ success: any[]}>(`${this.trackingDataUrl}${deviceId}/last_points?lastPoints=50`, { headers: { Authorization: `Bearer ${token}` } });
  }
}
