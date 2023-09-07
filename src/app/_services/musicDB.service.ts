import { Injectable } from '@angular/core';
import localforage from "localforage";
import { Filesystem, Directory, ReaddirResult, PermissionStatus } from '@capacitor/filesystem';

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
		Filesystem.requestPermissions().then((status:PermissionStatus)=>{
			console.log("PERM: "+JSON.stringify(status, null, 4));
			return status;
		});

		Filesystem.readdir({
			path: '/',
			directory: Directory.ExternalStorage
		}).then((res:ReaddirResult)=>{
			console.log("FILESLIST: "+JSON.stringify(res.files, null, 4));
		}).catch((err:any)=>{
			console.error("FILELISTERR "+JSON.stringify(err, null, 4));
		})
	}

	public GetMusicList(){}
}
