import { Injectable } from '@angular/core';
import localforage from "localforage";

const MUSIC_DB_KEY:string = 'db';

@Injectable({
	providedIn: 'root'
})
export class MusicDBService {

	constructor(
	){
		localforage.setDriver(localforage.INDEXEDDB);
		localforage.setItem(MUSIC_DB_KEY, []);
	}

	public ScanDirectories(){}

	public GetMusicList(){}
}
