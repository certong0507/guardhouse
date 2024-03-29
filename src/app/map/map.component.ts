/// <reference types="@types/googlemaps" />
import { Component, OnInit } from "@angular/core";
// import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from "@angular/platform-browser";
import { ToastrService } from "ngx-toastr";
import { FormBuilder, FormGroup } from "@angular/forms";
import { stringify } from "@angular/core/src/render3/util";
// import { MediaRecorder } from '@an'

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  map: any;
  mapReturn: any;

  // locations: location[] = [
  //     {
  //         lat: 3.116376,
  //         lng: 101.5949798,
  //         iconUrl: 'assets/images/googlemap/current_location_marker.png'
  //     },
  //     {
  //         lat: 3.216376,
  //         lng: 101.5949798,
  //     },
  //     {
  //         lat: 3.316376,
  //         lng: 101.5949798,
  //     },
  //     {
  //         lat: 3.416376,
  //         lng: 101.5949798,
  //     },
  //     {
  //         lat: 3.516376,
  //         lng: 101.5949798,
  //     },
  //     {
  //         lat: 3.221552,
  //         lng: 101.632551,
  //     },
  //     {
  //         lat: 3.221420,
  //         lng: 101.632651
  //     }
  // ];

  //Lets initiate Record OBJ
  private record: any;
  //Will use this flag for detect recording
  private recording = false;
  //Url of Blob
  private url;
  private error;
  private mediaRecorder: any;
  private audioChunks = [];
  private form: FormGroup;

  constructor(private domSanitizer: DomSanitizer, private toastr: ToastrService, private _formBuilder: FormBuilder) {}

  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

  /**
   * Start recording.
   */
  initiateRecording() {
    this.recording = true;
    let mediaConstraints = {
      video: false,
      audio: true
    };
    navigator.mediaDevices.getUserMedia(mediaConstraints).then(stream => {
      this.mediaRecorder = new MediaRecorder(stream);

      this.mediaRecorder.start();

      this.mediaRecorder.addEventListener("dataavailable", event => {
        this.audioChunks.push(event.data);
        const audioBlob = new Blob(this.audioChunks);
        this.url = URL.createObjectURL(audioBlob);
      });
    });
  }
  /**
   * Will be called automatically.
   */
  successCallback(stream) {
    let options = {
      mimeType: "audio/wav",
      numberOfAudioChannels: 1
    };
    //Start Actuall Recording
    // let StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    // this.record = new StereoAudioRecorder(stream, options);
    this.record.record();
  }
  /**
   * Stop recording.
   */
  stopRecording() {
    this.recording = false;
    // this.record.stop(this.processRecording.bind(this));
    this.mediaRecorder.stop();
  }
  /**
   * processRecording Do what ever you want with blob
   * @param  {any} blob Blog
   */
  processRecording(blob) {
    this.url = URL.createObjectURL(blob);
  }
  /**
   * Process Error.
   */
  errorCallback(error) {
    this.error = "Can not play audio in your browser";
  }

  ngOnInit() {
    this.form = this._formBuilder.group({
      location: [""],
      targetLat: [3.209087],
      targetLng: [101.616143],
      radius: [20]
    });
    renderGoogleMap(this.form.value.targetLat, this.form.value.targetLng, this.form.value.radius).then(
      map => {
        this.mapReturn = map;
        this.mapReturn.my_circle.radius = this.form.value.radius;

        // Stop Geolocation Watcher
        // $scope.$on('$ionicView.beforeLeave', function () {
        //     navigator.geolocation.clearWatch($scope.map.watcher);
        // });
      },
      err => {
        console.log(err);
      }
    );
  }

  refreshMap(): void {
    const location = this.form.value.location;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyDw-WCo1VorJi8T4KcrzJyyJbI2GwRs070`;

    if (location.length > 0) {
      console.log("url: ", url);

      fetch(url)
        .then(res => res.json())
        .then(res => {
          if (res.status === "OK") {
            this.form.patchValue({
              targetLat: res.results[0].geometry.location.lat,
              targetLng: res.results[0].geometry.location.lng
            });

            renderGoogleMap(this.form.value.targetLat, this.form.value.targetLng, this.form.value.radius).then(
              map => {
                this.mapReturn = map;
                this.mapReturn.my_circle.radius = this.form.value.radius;
              },
              err => {
                console.log(err);
              }
            );
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      alert("Location is required.")
    }
  }

  clockIn() {
    if (
      circleContainsLocation(
        new google.maps.LatLng(this.form.value.targetLat, this.form.value.targetLng),
        this.mapReturn.my_circle
      )
    ) {
      this.toastr.success("Within targeted location.", "Clock in successfully");
    } else {
      this.toastr.error("Out of targeted location.", "Clock in failed");
    }
  }
}

interface location {
  lat: number;
  lng: number;
  iconUrl?: string;
}

//Create google map
function create_google_map(selector: any, latlng: any) {
  return new google.maps.Map(selector, {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    streetViewControl: false,
    mapTypeControl: false,
    center: latlng
  });
}

function renderGoogleMap(lat: number, lng: number, radius: number) {
  let dfd = $.Deferred();
  let geoOptions = {
    maximumAge: 5000,
    timeout: 0,
    enableHighAccuracy: true
  };

  // init map
  let google_map = create_google_map(document.getElementById("my-map-canvas"), new google.maps.LatLng(lat, lng));
  let map = {
    map: google_map,
    my_marker: null,
    my_circle: null,
    cc_marker: null,
    watcher: 0
  };

  navigator.geolocation.clearWatch(map.watcher);
  //create watch location event to update current location
  map.watcher = navigator.geolocation.watchPosition(
    location => {
      let mapObj = map;
      let current_latlng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);

      mapObj.my_marker = createOrUpdateMarker({
        map: mapObj.map,
        marker: mapObj.my_marker,
        latlng: current_latlng,
        self: true
      });

      mapObj.my_circle = createOrUpdateCircle({
        map: mapObj.map,
        circle: mapObj.my_circle,
        latlng: current_latlng,
        radius: radius
      });

      mapObj.cc_marker = createOrUpdateMarker({
        map: mapObj.map,
        marker: mapObj.cc_marker,
        latlng: new google.maps.LatLng(lat, lng)
      });
      setGoogleMapBoundary(map.map, [map.my_marker, map.cc_marker]);

      dfd.resolve(map);
    },
    err => {
      let mapObj = map;
      let current_latlng = new google.maps.LatLng(lat, lng);

      mapObj.my_marker = createOrUpdateMarker({
        map: mapObj.map,
        marker: mapObj.my_marker,
        latlng: current_latlng,
        self: true
      });

      mapObj.my_circle = createOrUpdateCircle({
        map: mapObj.map,
        circle: mapObj.my_circle,
        latlng: current_latlng,
        radius: radius
      });

      mapObj.cc_marker = createOrUpdateMarker({
        map: mapObj.map,
        marker: mapObj.cc_marker,
        latlng: new google.maps.LatLng(lat, lng)
      });
      setGoogleMapBoundary(map.map, [map.my_marker, map.cc_marker]);

      dfd.resolve(map);
    },
    geoOptions
  );

  return dfd.promise();
}

function createOrUpdateMarker(param: any) {
  let marker: any;

  if (param.marker) param.marker.setMap(null);

  if (param.self) {
    let icon = {
      url: "assets/images/googlemap/current_location_marker.png",
      scaledSize: new google.maps.Size(15, 15), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(8, 8) // anchor
    };

    marker = new google.maps.Marker({
      position: param.latlng,
      map: param.map,
      icon: icon
    });
  } else {
    marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: param.latlng,
      map: param.map
    });
    // for (let i = 0; i < locations.length; i++) {
    //   marker = new google.maps.Marker({
    //     animation: google.maps.Animation.DROP,
    //     position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
    //     map: param.map
    //   });
    //   // google.maps.event.addListener(marker, 'click', (function(marker, i) {
    //   //     return function() {

    //   //     }
    //   // })(marker, i));
    // }
  }

  return marker;
}

function createOrUpdateCircle(param: any) {
  if (param.circle) param.circle.setMap(null);

  return new google.maps.Circle({
    strokeColor: "#FF5722", // Outer circle line color
    strokeOpacity: 0.1, // Outer circle line opacity
    strokeWeight: 1, // Outer circle line weight
    fillColor: "#FF5722", // Circle color
    fillOpacity: 0.35, // Circle opacity
    map: param.map, // Map object
    center: param.latlng, // Lat long value
    radius: parseInt(param.radius), // radius from centered lat lng. Value UOM in meters
    clickable: true // for ad hoc purpose can click in the circle
  });
}

function setGoogleMapBoundary(map: any, coords: any) {
  google.maps.event.addListener(map, "bounds_changed", function() {
    let latNorth = map
      .getBounds()
      .getNorthEast()
      .lat();
    let latSouth = map
      .getBounds()
      .getSouthWest()
      .lat();
    let newLat: any;

    if (latNorth < 85 && latSouth > -85)
      /* in both side -> it's ok */
      return;
    else {
      if (latNorth > 85 && latSouth < -85)
        /* out both side -> it's ok */
        return;
      else {
        if (latNorth > 85) newLat = map.getCenter().lat() - (latNorth - 85); /* too north, centering */
        if (latSouth < -85) newLat = map.getCenter().lat() - (latSouth + 85); /* too south, centering */
      }
    }
    if (newLat) {
      let newCenter = new google.maps.LatLng(newLat, map.getCenter().lng());
      map.setCenter(newCenter);
    }
  });

  //Create empty LatLngBounds object
  let bounds = new google.maps.LatLngBounds();
  //Extend the bounds to include each marker's position
  coords.forEach(function(coord: any) {
    bounds.extend(coord.getPosition());
  });
  //Now fit the map to the newly inclusive bounds
  map.fitBounds(bounds);
}

function circleContainsLocation(point: any, circle: any) {
  let radius = circle.getRadius();
  let center = circle.getCenter();
  return google.maps.geometry.spherical.computeDistanceBetween(point, center) <= radius;
}
