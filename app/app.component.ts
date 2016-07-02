import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { GironiComponent } from './component/gironi.component';

@Component({
    selector: 'applicazione',
    templateUrl: 'app/view/home.html',
    directives : [ROUTER_DIRECTIVES], //GironiComponent
    providers : [ROUTER_PROVIDERS]
})

@RouteConfig([
	{
		path : '/gironi',
		name : 'Gironi',
		component : GironiComponent
	}
])

export class AppComponent {
	public benvenuto : string = "Benvenuto";
}
