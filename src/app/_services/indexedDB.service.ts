import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class IndexedDBService {

	db:any = null;

	constructor(
	){
	}

	Connect(dbName:string, structure:any):Promise<boolean>{
		return new Promise((res, rej)=>{
			const req = indexedDB.open(dbName);
			req.onerror = (error:any) => { console.error(error); rej(false); }
			req.onsuccess = (event:any) => { this.db = event.target.result; res(true); }
			req.onupgradeneeded = ()=>{
				var store = this.db.createObjectStore("MyObjectStore", {keyPath: "id"});
				var index = store.createIndex("NameIndex", ["name.last", "name.first"]);
			};
		});
	}
}
