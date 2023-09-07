import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MusicDBService } from '../_services/musicDB.service';

@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: ['tab2.page.scss'],
	standalone: true,
	imports: [IonicModule]
})
export class Tab2Page {

	constructor(
		private musicDB: MusicDBService
	) {
	}

	ScanDirs(){
		this.musicDB.ScanDirectories();
	}
}
