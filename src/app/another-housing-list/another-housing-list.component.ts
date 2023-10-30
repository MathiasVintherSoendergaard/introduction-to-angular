import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AnotherHousingLocation } from '../another-housing-location';

@Component({
  selector: 'app-another-housing-list',
  templateUrl: './another-housing-list.component.html',
  styleUrls: ['./another-housing-list.component.css']
})
export class AnotherHousingListComponent implements OnInit {

  constructor() { }

  @Input() locationList: AnotherHousingLocation[] = [];
  results: AnotherHousingLocation[] = [];

  @Output() locationSelectedEvent = new EventEmitter<AnotherHousingLocation>();

  ngOnInit(): void {
  }

  searchHousingLocations(searchText: String) {
    if(!searchText) this.results = this.locationList;
    console.log("search button clicked with search text " + searchText)
    this.results = this.locationList.filter(
      (location: AnotherHousingLocation) => location.city
      .toLowerCase()
      .includes(
        searchText.toLowerCase()
      ));
  }

  selectHousingLocation(location: AnotherHousingLocation) {
    console.log("select location clicked")
    this.locationSelectedEvent.emit(location)
  }

}
