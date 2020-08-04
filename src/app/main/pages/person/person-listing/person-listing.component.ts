import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-person-listing',
	templateUrl: './person-listing.component.html',
	styleUrls: ['./person-listing.component.scss']
})
export class PersonListingComponent implements OnInit {

	constructor(
		private _router: Router
	) { }

	ngOnInit(): void {
	}

	newPerson(): void {
		this._router.navigate(['/pages/person']);
	}
}
