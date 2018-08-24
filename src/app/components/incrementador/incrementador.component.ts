import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-incrementador',
	templateUrl: './incrementador.component.html'
})

export class IncrementadorComponent implements OnInit {

	@ViewChild('txtporcentaje')	txtPorcentaje: ElementRef;

	@Input('nombre') leyenda: string = 'Leyenda';
	@Input() porcentaje: number = 50;

	@Output('actualiza') cambioValor: EventEmitter<number> = new EventEmitter();

	constructor() {
	}

	ngOnInit() {
	}

	cambiarValor(valor: number) {
		if (this.porcentaje >= 100 && valor > 0) {
			this.porcentaje = 100;
		} else if (this.porcentaje <= 0 && valor < 0) {
			this.porcentaje = 0;
		} else if (this.porcentaje >= 96 && valor > 0) {
			this.porcentaje = 100;
		} else if (this.porcentaje <= 4 && valor < 0) {
			this.porcentaje = 0;
		} else {
			this.porcentaje = this.porcentaje + valor;
		}
		this.cambioValor.emit(this.porcentaje);
		this.txtPorcentaje.nativeElement.focus();
	}

	onChange(valor: number) {
		//console.log(event);
		//let elemHTML: any = document.getElementsByName('porcentaje')[0];
		//console.log(elemHTML.value);
		//console.log(this.txtPorcentaje);
		
		if (valor >= 100) {
			this.porcentaje = 100;
		} else if (valor <= 0) {
			this.porcentaje = 0;
		} else {
			this.porcentaje = valor;
		}

		//elemHTML.value = this.porcentaje;
		this.txtPorcentaje.nativeElement.value = this.porcentaje;

		this.cambioValor.emit(this.porcentaje);

		this.txtPorcentaje.nativeElement.focus();
	}

}
