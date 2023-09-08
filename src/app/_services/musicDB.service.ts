import { Injectable } from '@angular/core';
import localforage from "localforage";
import { Filesystem, Directory, ReaddirResult, PermissionStatus, FileInfo } from '@capacitor/filesystem';
import { Song } from '../_models/song';

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

	public ScanDirectories(){
		Filesystem.readdir({
			path: '/sdcard/',
			//directory: Directory.ExternalStorage
		}).then((res:ReaddirResult)=>{
			console.log("FILESLIST: "+JSON.stringify(res.files, null, 4));
			res.files
				.filter((x:FileInfo)=>x.type === "file")
				.forEach((file:FileInfo)=>{
					window.jsmediatags.read(file.uri,{
						onSuccess: (info:any)=>{
							const song = new Song({
								...info.tags,
								dateAdded: new Date(),
								plays: 0,
								file: file.uri
							});
						},
						onError: (err:any)=>{}
					})
				});
		}).catch((err:any)=>{
			console.error("FILELISTERR "+JSON.stringify(err, null, 4));
		})
	}

	public GetMusicList(){}
}
