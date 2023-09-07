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
	@ViewChild("audio") audio:ElementRef<HTMLAudioElement>;

	current:Song = new Song();
	time:{current: number, total: number} = {current:0, total:0};
	playIcon: string = "play";

	constructor(
		private player:PlayerService
	){}

	ngOnInit(){}

	Play(){
		if(this.audio.nativeElement.paused){
			this.playIcon = "pause";
			this.audio.nativeElement.play();
		}else{
			this.playIcon = "play";
			this.audio.nativeElement.pause();
		}
	}
	PlayBack(){}
	PlayForward(){
		this.current = this.player.GetNext();
	}

	SetupData(){
		this.time.total = this.audio.nativeElement.duration;
	}

	OnTimeUpdate(){
		this.time.current = this.audio.nativeElement.currentTime;
		this.time.total = this.audio.nativeElement.duration;
	}

	private TogglePlayIcon(){
		this.playIcon = this.playIcon === "play"?"pause":"play";
	}

}
