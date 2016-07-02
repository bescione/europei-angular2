import { Injectable } from '@angular/core';
import { GIRONI } from './mock.gironi';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Headers } from '@angular/http';

@Injectable()

export class GironiService {

	constructor(private _http : Http) {}
	getGironi() {
		return GIRONI;
	}

	postGironi(partita : {team : string, risultato : string}) {
		const body = JSON.stringify(partita);

		let headers = new Headers;
		headers.append('Content-type', 'application/json');
		return this._http.post('project-8138444920201144382.firebaseio.com/partita.json', body, headers)
		.map(res => res.json());
	}
}