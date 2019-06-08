# Guardhouse

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Please follow steps below:

Google Maps API - Geolocation

1. npm install --save @types/googlemaps
2. copy <script src="http://maps.google.com/maps/api/js?key=xxx"></script> into index.html
3. copy /// <reference types="@types/googlemaps" /> into component
4. npm install --save @types/jquery
5. npm install jquery --save
6. copy to tsconfig.app.json "types": [
      "googlemaps"
    ]
7. copy to tsconfig.spec.json "types": ["jasmine", "node", "googlemaps"]
8. import * as $ from 'jquery'; into app.module.ts
9. copy into angular.json "scripts": [
              "node_modules/jquery/dist/jquery.min.js"
            ],
