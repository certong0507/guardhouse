(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<router-outlet></router-outlet>\n<app-map></app-map>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'guardhouse';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");




// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <script src=\"https://cdn.rawgit.com/webrtc/adapter/master/adapter.js\"></script>\n\n  <div class=\"mt-4 mb-4 text-center\">\n    <h2>Geofencing Clock In</h2>\n  </div>\n\n  <div style=\"width:100%;overflow:hidden;height:400px;max-width:100%;\">\n    <div id=\"my-map-canvas\"\n         style=\"height:100%; width:100%;max-width:100%;\"></div>\n    <style>\n      #my-map-canvas img {\n        max-width: none !important;\n        background: none !important;\n        font-size: inherit;\n      }\n    </style>\n  </div>\n\n  <button type=\"button\"\n          class=\"btn btn-primary btn-block mt-4\"\n          (click)=\"clockIn()\"> Clock In</button>\n\n  <!-- <a (click)=\"initiateRecording()\"\n   class=\"btn btn-primary\"\n   *ngIf=\"!recording\"> Start Recording </a>\n\n<a (click)=\"stopRecording()\"\n   class=\"btn btn-danger\"\n   *ngIf=\"recording\"> Stop Recording </a>\n\n<div class=\"clearfix\"></div>\n\n<audio controls=\"\"\n       *ngIf=\"url\">\n  <source [src]=\"sanitize(url)\"\n          type=\"audio/wav\">\n</audio> -->\n</div>"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");

/// <reference types="@types/googlemaps" />

// import * as RecordRTC from 'recordrtc';


// import { MediaRecorder } from '@an'
var MapComponent = /** @class */ (function () {
    function MapComponent(domSanitizer, toastr) {
        this.domSanitizer = domSanitizer;
        this.toastr = toastr;
        //Will use this flag for detect recording
        this.recording = false;
        this.audioChunks = [];
    }
    MapComponent.prototype.sanitize = function (url) {
        return this.domSanitizer.bypassSecurityTrustUrl(url);
    };
    /**
     * Start recording.
     */
    MapComponent.prototype.initiateRecording = function () {
        var _this = this;
        this.recording = true;
        var mediaConstraints = {
            video: false,
            audio: true
        };
        navigator.mediaDevices.getUserMedia(mediaConstraints)
            .then(function (stream) {
            _this.mediaRecorder = new MediaRecorder(stream);
            _this.mediaRecorder.start();
            _this.mediaRecorder.addEventListener("dataavailable", function (event) {
                _this.audioChunks.push(event.data);
                var audioBlob = new Blob(_this.audioChunks);
                _this.url = URL.createObjectURL(audioBlob);
            });
        });
    };
    /**
     * Will be called automatically.
     */
    MapComponent.prototype.successCallback = function (stream) {
        var options = {
            mimeType: "audio/wav",
            numberOfAudioChannels: 1
        };
        //Start Actuall Recording
        // let StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
        // this.record = new StereoAudioRecorder(stream, options);
        this.record.record();
    };
    /**
     * Stop recording.
     */
    MapComponent.prototype.stopRecording = function () {
        this.recording = false;
        // this.record.stop(this.processRecording.bind(this));
        this.mediaRecorder.stop();
    };
    /**
     * processRecording Do what ever you want with blob
     * @param  {any} blob Blog
     */
    MapComponent.prototype.processRecording = function (blob) {
        this.url = URL.createObjectURL(blob);
    };
    /**
     * Process Error.
     */
    MapComponent.prototype.errorCallback = function (error) {
        this.error = 'Can not play audio in your browser';
    };
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        renderGoogleMap().then(function (map) {
            _this.mapReturn = map;
            _this.mapReturn.my_circle.radius = 1;
            // Stop Geolocation Watcher
            // $scope.$on('$ionicView.beforeLeave', function () {
            //     navigator.geolocation.clearWatch($scope.map.watcher);
            // });
        }, function (err) {
            console.log(err);
        });
    };
    MapComponent.prototype.clockIn = function () {
        if (circleContainsLocation(new google.maps.LatLng(this.targetLat, this.targetLng), this.mapReturn.my_circle)) {
            console.log('true');
            this.toastr.success('Within targeted location.', 'Clock in successfully');
        }
        else {
            console.log('false');
            this.toastr.error('Out of targeted location.', 'Clock in failed');
        }
    };
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], MapComponent);
    return MapComponent;
}());

;
//Create google map
function create_google_map(selector, latlng) {
    return new google.maps.Map(selector, {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        streetViewControl: false,
        mapTypeControl: false,
        center: latlng
    });
}
;
function renderGoogleMap() {
    var dfd = $.Deferred();
    var geoOptions = {
        maximumAge: 5000,
        timeout: 10000,
        enableHighAccuracy: true
    };
    // init map
    var google_map = create_google_map(document.getElementById("my-map-canvas"), new google.maps.LatLng(3.221500, 101.632805));
    var map = {
        map: google_map,
        my_marker: null,
        my_circle: null,
        cc_marker: null,
        watcher: 0
    };
    navigator.geolocation.clearWatch(map.watcher);
    //create watch location event to update current location
    map.watcher = navigator.geolocation.watchPosition(function (location) {
        var mapObj = map;
        var current_latlng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
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
            latlng: new google.maps.LatLng(3.221500, 101.632805)
        });
        setGoogleMapBoundary(map.map, [map.my_marker, map.cc_marker]);
        dfd.resolve(map);
    }, function (err) {
        // if (ionic.Platform.device().platform) {
        //     dfd.reject(err);
        //     return false;
        // }
        var mapObj = map;
        var current_latlng = new google.maps.LatLng(3.221500, 101.632805);
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
            latlng: new google.maps.LatLng(3.221500, 101.632805)
        });
        setGoogleMapBoundary(map.map, [map.my_marker, map.cc_marker]);
        dfd.resolve(map);
    }, geoOptions);
    return dfd.promise();
}
;
function createOrUpdateMarker(param) {
    var marker;
    var locations = [
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
        },
        {
            lat: 3.221440,
            lng: 101.632691
        }
    ];
    if (param.marker)
        param.marker.setMap(null);
    if (param.self) {
        var icon = {
            url: "assets/images/googlemap/current_location_marker.png",
            scaledSize: new google.maps.Size(15, 15),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(8, 8) // anchor
        };
        marker = new google.maps.Marker({
            position: param.latlng,
            map: param.map,
            icon: icon,
        });
    }
    else {
        for (var i = 0; i < locations.length; i++) {
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
}
;
function createOrUpdateCircle(param) {
    if (param.circle)
        param.circle.setMap(null);
    return new google.maps.Circle({
        strokeColor: '#FF5722',
        strokeOpacity: 0.1,
        strokeWeight: 1,
        fillColor: '#FF5722',
        fillOpacity: 0.35,
        map: param.map,
        center: param.latlng,
        radius: 1,
        clickable: true,
    });
}
;
function setGoogleMapBoundary(map, coords) {
    google.maps.event.addListener(map, "bounds_changed", function () {
        var latNorth = map.getBounds().getNorthEast().lat();
        var latSouth = map.getBounds().getSouthWest().lat();
        var newLat;
        if (latNorth < 85 && latSouth > -85) /* in both side -> it's ok */
            return;
        else {
            if (latNorth > 85 && latSouth < -85) /* out both side -> it's ok */
                return;
            else {
                if (latNorth > 85)
                    newLat = map.getCenter().lat() - (latNorth - 85); /* too north, centering */
                if (latSouth < -85)
                    newLat = map.getCenter().lat() - (latSouth + 85); /* too south, centering */
            }
        }
        if (newLat) {
            var newCenter = new google.maps.LatLng(newLat, map.getCenter().lng());
            map.setCenter(newCenter);
        }
    });
    //Create empty LatLngBounds object
    var bounds = new google.maps.LatLngBounds();
    //Extend the bounds to include each marker's position
    coords.forEach(function (coord) {
        bounds.extend(coord.getPosition());
    });
    //Now fit the map to the newly inclusive bounds
    map.fitBounds(bounds);
}
;
function circleContainsLocation(point, circle) {
    var radius = circle.getRadius();
    var center = circle.getCenter();
    return (google.maps.geometry.spherical.computeDistanceBetween(point, center) <= radius);
}
;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/certong/Project/Angular/guardhouse/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map