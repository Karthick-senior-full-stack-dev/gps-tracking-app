// src/app/menu/menu.component.ts
import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  devices: any[] = [];
  token: string = '';
  userEmail: string | null | undefined;

  constructor(private authService: AuthService, private deviceService: DeviceService, private router: Router) { }

  ngOnInit() {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/']);
    }
    this.userEmail = localStorage.getItem('name');
    this.token = localStorage.getItem('token') || '';
    this.deviceService.getDevices(this.token).subscribe(devices => {
      this.devices = devices.success;
    });
  }
  logout(){
    localStorage.clear();
    Swal.fire({
      text: 'Logout Scuccessfully!',
      icon: 'success',
      toast: true,
      position: 'top-right',
      timerProgressBar: true,
      showConfirmButton: false,
    });
    this.router.navigate(['/']);
  }
  selectDevice(device: any) {
    localStorage.setItem("deviceId",device.id);
    this.deviceService.getTrackingData(device.id, this.token).subscribe(
      response => {
        if (response && response.success) {
          let positionData = response.success;
          const positionDataStr = JSON.stringify(positionData);

          // Navigate to the map component with serialized positionData
          this.router.navigate(['/map'], { queryParams: { positionData: positionDataStr } });
        } else {
          console.error('Response does not contain success array:', response);
        }
      },
      error => {
        console.error('Failed to load devices:', error);
      }
    );
  }
}
