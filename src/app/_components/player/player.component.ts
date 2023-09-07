import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Song } from 'src/app/_models/song';
import { PlayerService } from 'src/app/_services/player.service';
import { TimeComponent } from '../time/time.component';

@Component({
	selector: 'zm-player',
	standalone: true,
	templateUrl: './player.component.html',
	styleUrls: ['./player.component.scss'],
	imports: [IonicModule, TimeComponent]
})
export class PlayerComponent implements OnInit {
	@ViewChild("audio") audio: ElementRef<HTMLAudioElement>;

	current: Song = new Song();
	time: { current: number, total: number } = { current: 0, total: 0 };
	playIcon: string = "play";
	loading: boolean = true;

	constructor(
		private player: PlayerService
	) { }

	ngOnInit() { }

	Play() {
		if(this.loading) return;
		if (this.audio.nativeElement.paused) {
			this.playIcon = "pause";
			this.audio.nativeElement.play();
		} else {
			this.playIcon = "play";
			this.audio.nativeElement.pause();
		}
	}
	PlayBack(){
		if(this.loading) return;
		this.audio.nativeElement.currentTime = 0;
	}
	PlayForward() {
		this.current = this.player.GetNext();
	}

	SetupData() {
		this.time.total = this.audio.nativeElement.duration;
	}

	OnTimeUpdate() {
		this.time.current = this.audio.nativeElement.currentTime;
		this.time.total = this.audio.nativeElement.duration;
	}

	OnCanPlay(){ this.loading = false; }
	OnLoadStart(){ this.loading = true; }

}
