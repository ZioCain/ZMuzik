export interface ISong {
	artist: string;
	title: string;
	album: string;
	genre: string;

	file: string;

	dateAdded: Date;

	plays: number;
}

export class Song implements ISong {
	artist: string = "";
	title: string = "";
	album: string = "";
	genre: string = "";

	file: string = "";

	dateAdded: Date = new Date();

	plays: number = 0;

	constructor(data?: ISong) {
		Object.assign(this, data);
	}
}