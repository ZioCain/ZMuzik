import { Injectable } from '@angular/core';
import { Song } from '../_models/song';

@Injectable({
	providedIn: 'root'
})
export class PlayerService {

	private sample: string = "http://localhost:8100/assets/music/sample-12s.mp3";

	private current: number = 0;
	private playlist: Song[] = [];

	constructor(
	) {
		window.jsmediatags.read(this.sample, {
			onSuccess: (tags: any) => {
				console.log(tags);
				this.playlist.push(new Song({
					title: tags.tags.title,
					artist: tags.tags.artist,
					file: this.sample,
					album: "",
					genre: "",
					dateAdded: new Date(),
					plays: 0
				}));
			},
			onError: (err: any) => { console.error(err) }
		});
	}

	GetNext(): Song {
		if(this.current+1 >= this.playlist.length) this.current = -1;
		return this.playlist[++this.current];
	}
}
