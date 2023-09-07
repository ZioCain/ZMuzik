import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
	standalone: true,
	selector: 'zm-time',
	templateUrl: './time.component.html',
	styleUrls: ['./time.component.scss'],
})
export class TimeComponent implements OnChanges {
	@Input("time") time: number;
	output: string = "0";

	constructor() { }

	ngOnChanges(changes: SimpleChanges): void {
		if(isNaN(this.time)) this.time = 0;
		const start = this.time < 3600?14:11;
		this.output = new Date(this.time * 1000).toISOString().slice(start, 19);
	}

}
