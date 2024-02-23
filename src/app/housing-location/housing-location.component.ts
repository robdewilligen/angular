import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HousingLocation } from "../housinglocation";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-housing-location',
    standalone: true,
    imports: [
        RouterLink
    ],
    templateUrl: 'housing-location.component.html',
    styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {
    @Input() housingLocation!: HousingLocation;
}
