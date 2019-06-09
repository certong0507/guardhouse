/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    map: any;
    mapReturn: any;
    locations: location[] = [
        {
            lat: 3.116376,
            lng: 101.5949798,
            iconUrl: 'assets/images/googlemap/current_location_marker.png'
        },
        {
            lat: 3.216376,
            lng: 101.5949798,
        },
        {
            lat: 3.316376,
            lng: 101.5949798,
        },
        {
            lat: 3.416376,
            lng: 101.5949798,
        },
        {
            lat: 3.516376,
            lng: 101.5949798,
        },
        {
            lat: 2.9944132999999997,
            lng: 101.4308028,
        }
    ];

    constructor() { }

    ngOnInit() {
        renderGoogleMap().then(map =>{
            this.mapReturn = map;
            //this.mapReturn.my_circle.radius = 500;

            // Stop Geolocation Watcher
            // $scope.$on('$ionicView.beforeLeave', function () {
            //     navigator.geolocation.clearWatch($scope.map.watcher);
            // });
        }, err => {
            console.log(err);
        });
    }

    clockIn(){
        if (circleContainsLocation(new google.maps.LatLng(this.locations[5].lat, this.locations[5].lng), this.mapReturn.my_circle)) {
            console.log('true');
        }
        else{
            console.log('false');
        }
    }

}

interface location{
    lat: number;
    lng: number;
    iconUrl?: string;
};

//Create google map
function create_google_map(selector: any, latlng: any) {
    return new google.maps.Map(selector, {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        streetViewControl: false,
        mapTypeControl: false,
        center: latlng,
        zoom: 10,
    });
};

function renderGoogleMap() {
    let dfd = $.Deferred();
    let geoOptions = {
        maximumAge: 5000,
        timeout: 10000,
        enableHighAccuracy: true
    };

    // init map
    let google_map = create_google_map(document.getElementById("my-map-canvas"), new google.maps.LatLng(3.116376, 101.5949798));

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
        function (location) {
            let mapObj = map;
            let current_latlng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);

            mapObj.my_marker = createOrUpdateMarker({
                map: mapObj.map,
                marker: mapObj.my_marker,
                latlng: current_latlng,
                self: true,
            });

            mapObj.my_circle = createOrUpdateCircle({
                map: mapObj.map,
                circle: mapObj.my_circle,
                latlng: current_latlng
            });

            mapObj.cc_marker = createOrUpdateMarker({
                map: mapObj.map,
                marker: mapObj.cc_marker,
                latlng: new google.maps.LatLng(3.116376, 101.5949798)
            });
            setGoogleMapBoundary(map.map, [map.my_marker, map.cc_marker]);
            
            dfd.resolve(map);

        },
        function (err) {
            // if (ionic.Platform.device().platform) {
            //     dfd.reject(err);
            //     return false;
            // }

            let mapObj = map;
            let current_latlng = new google.maps.LatLng(3.116376, 101.5949798);

            mapObj.my_marker = createOrUpdateMarker({
                map: mapObj.map,
                marker: mapObj.my_marker,
                latlng: current_latlng,
                self: true,
            });

            mapObj.my_circle = createOrUpdateCircle({
                map: mapObj.map,
                circle: mapObj.my_circle,
                latlng: current_latlng
            });

            mapObj.cc_marker = createOrUpdateMarker({
                map: mapObj.map,
                marker: mapObj.cc_marker,
                latlng: new google.maps.LatLng(3.116376, 101.5949798)
            });
            setGoogleMapBoundary(map.map, [map.my_marker, map.cc_marker]);
            
            dfd.resolve(map);
        }, geoOptions);

    return dfd.promise();
};

function createOrUpdateMarker(param: any) {
    let marker: any;
    let locations: location[] = [
        {
            lat: 3.116376,
            lng: 101.5949798,
        },
        {
            lat: 3.216376,
            lng: 101.5849798,
        },
        {
            lat: 3.316376,
            lng: 101.5749798,
        },
        {
            lat: 3.416376,
            lng: 101.6049798,
        },
        {
            lat: 3.516376,
            lng: 101.6149798,
        },
        {
            lat: 2.9944132999999997,
            lng: 101.4308028,
        }
    ];

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
            icon: icon,
        });
    }
    else {
        for(let i=0;i<locations.length;i++){
            marker = new google.maps.Marker({
                animation: google.maps.Animation.DROP,
                position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
                map: param.map,
            });
        // google.maps.event.addListener(marker, 'click', (function(marker, i) {
        //     return function() {

        //     }
        // })(marker, i));
        }
            
    }

    return marker;
};

function createOrUpdateCircle(param: any) {
    if (param.circle) param.circle.setMap(null);

    return new google.maps.Circle({
        strokeColor: '#FF5722', // Outer circle line color
        strokeOpacity: 0.1,     // Outer circle line opacity
        strokeWeight: 1,        // Outer circle line weight
        fillColor: '#FF5722',   // Circle color
        fillOpacity: 0.35,      // Circle opacity
        map: param.map,         // Map object
        center: param.latlng,   // Lat long value
        radius: 100,             // radius from centered lat lng. Value UOM in meters
        clickable: true,           // for ad hoc purpose can click in the circle
    });
};

function setGoogleMapBoundary(map: any, coords: any) {
    google.maps.event.addListener(map, "bounds_changed", function () {
        let latNorth = map.getBounds().getNorthEast().lat();
        let latSouth = map.getBounds().getSouthWest().lat();
        let newLat: any;

        if (latNorth < 85 && latSouth > -85)     /* in both side -> it's ok */
            return;
        else {
            if (latNorth > 85 && latSouth < -85)   /* out both side -> it's ok */
                return;
            else {
                if (latNorth > 85)
                    newLat = map.getCenter().lat() - (latNorth - 85);   /* too north, centering */
                if (latSouth < -85)
                    newLat = map.getCenter().lat() - (latSouth + 85);   /* too south, centering */
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
    coords.forEach(function (coord: any) {
        bounds.extend(coord.getPosition());
    });
    //Now fit the map to the newly inclusive bounds
    map.fitBounds(bounds);
};

function circleContainsLocation(point: any, circle: any) {
    let radius = circle.getRadius();
    let center = circle.getCenter();
    return (google.maps.geometry.spherical.computeDistanceBetween(point, center) <= radius);
};


