import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription, Subscriber } from 'rxjs/Rx';
import { retry, map, filter } from 'rxjs/operators';


@Component({
	selector: 'app-rxjs',
	templateUrl: './rxjs.component.html'
})

export class RxjsComponent implements OnInit, OnDestroy {

	subscripcion: Subscription;

	constructor() {
		this.subscripcion =
		this.regresaObservable() // .pipe(
			// retry(2) // Número de intentos
		//)
		.subscribe(
			numero => console.log('subs', numero), // Next
			error => console.error('Error en el obs', error), // error
			() => console.log('El observador termninó') // Al terminar
		);
	}

	ngOnInit() { }

	ngOnDestroy() {
		console.log('la página se va a cerrar');
		this.subscripcion.unsubscribe();
	}

	regresaObservable(): Observable<any> {
		return new Observable( (observer: Subscriber<any>) => {
			let contador = 0;
			const intervalo = setInterval( () => {
				contador += 1;
				const salida = {
					valor: contador
				};
				//observer.next(contador);
				observer.next(salida);
				/*if (contador === 3) {
					clearInterval(intervalo);
					observer.complete();
				}*/
				// if (contador === 2) {
					// clearInterval(intervalo); // para retry
				//	observer.error('auxilio');
				// }
			}, 1000);
		}).pipe(
			/*map( resp => {
				return resp.valor
			})*/ 
			map (resp => resp.valor),
			filter( (valor, index) => {	// valor, numero de veces
				console.log(valor);
				console.log(index);
				if ((valor % 2) === 1) { // impar
					return true;
				} else { // par
					return false;
				}
			})
		);
	}

}
