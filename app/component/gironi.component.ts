import {Component, OnInit} from '@angular/core';
import { GironiService } from '../service/gironi.service';

@Component({
	selector : 'gironi',
	templateUrl : 'app/view/gironi.html',
	styleUrls : ['app/css/gironi.css'],
	providers : [GironiService]
})

export class GironiComponent implements OnInit {
	public gironi : any;

	constructor(private _gironi : GironiService) {

	}

	getGironi() {
		this.gironi = this._gironi.getGironi();
		console.log(this.gironi);
	}

	ngOnInit() {
		this.getGironi();
	}
}