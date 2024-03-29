import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { NgForOf } from "@angular/common";
import { HousingService } from "../housing.service";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [HousingLocationComponent, NgForOf],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

    housingLocationList: HousingLocation[] = [];
    filteredLocationList: HousingLocation[] = [];
    housingService: HousingService = inject(HousingService);

    constructor() {
        this.housingLocationList = this.housingService.getAllHousingLocations();
        this.filteredLocationList = this.housingLocationList;
    }

    filterResults(text: string) {
        if (!text) {
            this.filteredLocationList = this.housingLocationList;
            return;
        }

        this.filteredLocationList = this.housingLocationList.filter(
            housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
        );
    }
}
