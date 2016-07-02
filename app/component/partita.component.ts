import { Component } from '@angular/core';
import { GironiService } from '../service/gironi.service';

@Component({
	selector : 'partita',
	providers : [GironiService],
	template : `
			Squadre : <input type="text" #team>
			<br> Risultato: <input type="text" #risultato>
			<button type="button" class="btn btn-default" (click)="onInvia(team.value, risultato.value">Invia</button>
				`
})

export class PartitaComponent {
	public response : string;

	constructor(private _http : GironiService) {}

	onInvia(team:string, risultato:string) {
		this._http.postGironi(team : team, risultato : risultato)
			.subscribe(
				response => this.response = response,
				error => console.log(error));
	}
}