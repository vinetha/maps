import { NavController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';


declare var google:any;

@Component({
selector: 'page-home',
templateUrl: 'home.html'
})
export class HomePage implements OnInit{
map: any;
markers = [];

constructor(public navCtrl: NavController) {}

ngOnInit() {
this.initMap();
}

private initMap() {
var point = {lat: 13.038039, lng: 80.21597};
let divMap = (<HTMLInputElement>document.getElementById('map'));
this.map = new google.maps.Map(divMap, {
center: point,
zoom: 15,
disableDefaultUI: true,
draggable: true,
zoomControl: true
});

var input = (document.getElementById('pac-input'));
var searchBox = new google.maps.places.SearchBox(input);
this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  searchBox.addListener('places_changed', function() {
  });

this.createMapMarker(point);
}

private createMapMarker(place:any):void {
var marker = new google.maps.Marker({
map: this.map,
position: place
});
this.markers.push(marker);
}

}