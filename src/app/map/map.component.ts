// src/app/map/map.component.ts
import { Component, OnInit } from '@angular/core';
import maplibregl from 'maplibre-gl';
import { DeviceService } from '../services/device.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: maplibregl.Map | undefined;
  token: string | undefined;
  positions: Array<{ lat: number, lng: number }> = []; // Array to hold position data
  deviceId: string | null | undefined;

  constructor(private deviceService: DeviceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/']);
    }
    this.deviceId = localStorage.getItem('deviceId');
    this.token = localStorage.getItem('token') || '';
    this.initMap();

    // if (this.token) {
    //   this.loadDevices();
    // }

    // Read query parameters
    this.route.queryParams.subscribe(params => {
      try {
        const positionDataStr = params['positionData'];
        if (positionDataStr) {
          const positionData = JSON.parse(positionDataStr);

          if (Array.isArray(positionData) && positionData.length) {
            this.positions = positionData.map((pos: any) => ({
              lat: pos.lat,
              lng: pos.lng
            }));

            // Draw polyline on the map after style has loaded
            if (this.map) {
              this.map.once('style.load', () => this.drawPolyline());
            }
          } else {
            console.warn('Invalid position data:', positionData);
          }
        } else {
          console.warn('No position data in query parameters');
        }
      } catch (error) {
        console.error('Error parsing position data:', error);
      }
    });
  }
  back(){
    this.router.navigate(['/menu']);
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
  initMap() {
    this.map = new maplibregl.Map({
      container: 'map',
      style: 'https://demotiles.maplibre.org/style.json',
      center: [0, 0],
      zoom: 2
    });

    this.map.once('style.load', () => {
      // Initialize the route source and layer
      this.map?.addSource('route', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': []
        }
      });

      this.map?.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          'line-color': '#888',
          'line-width': 6
        }
      });

      // Example label for an area
      this.map?.addSource('label', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [{
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [0, 0] // Replace with actual coordinates
            },
            'properties': {
              'title': 'Area Name'
            }
          }]
        }
      });

      this.map?.addLayer({
        'id': 'label',
        'type': 'symbol',
        'source': 'label',
        'layout': {
          'text-field': '{title}',
          'text-size': 12
        },
        'paint': {
          'text-color': '#000'
        }
      });
    });
  }

  loadDevices() {
    if (this.token && this.map) { // Ensure this.map is defined
      this.deviceService.getDevices(this.token).subscribe(
        response => {
          if (response && response.success) {
            const devices = response.success;
            console.log('Devices data:', devices); // Log devices data for debugging

            // Optionally process devices data if needed
          } else {
            console.error('Response does not contain success array:', response);
          }
        },
        error => {
          console.error('Failed to load devices:', error);
        }
      );
    } else {
      console.warn('Token or map is not defined.');
    }
  }

  drawPolyline() {
    if (this.map && this.positions.length > 0) {
      const coordinates = this.positions.map(pos => [pos.lng, pos.lat]); // MapLibre uses [lng, lat]

      // Update the source with the new polyline data
      const routeSource = this.map.getSource('route') as maplibregl.GeoJSONSource | undefined;
      if (routeSource) {
        routeSource.setData({
          'type': 'Feature',
          'geometry': {
            'type': 'LineString',
            'coordinates': coordinates
          },
          'properties': {} // Include an empty properties field
        });
      }

      // Center and zoom the map to fit the polyline
      const bounds = new maplibregl.LngLatBounds();
      coordinates.forEach(coord => bounds.extend(coord as [number, number]));
      this.map.fitBounds(bounds, { padding: 20 });
    }
  }
}
