import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-grafico-dona',
	templateUrl: './grafico-dona.component.html'
})

export class GraficoDonaComponent implements OnInit {
	
	@Input() valores: number[] = [10, 20, 30];
	@Input() etiquetas: string[] = ['e1', 'e2', 'e3'];
	@Input() tipo: string = 'doughnut';
	@Input() leyenda: string = 'Leyenda';

	constructor() { }

	ngOnInit() { }

}
