import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-player',
  templateUrl: 'player.page.html',
  styleUrls: ['player.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class PlayerPage {
  constructor() {}
}
