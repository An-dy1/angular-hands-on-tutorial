import { Component, VERSION } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GameService } from './game.service';

@Component({
  selector: 'fn-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  keyVisibility = 'hidden';
  currentTeam = 'Red';
  teamTextClass = 'redtext';
  winningMessage = '';

  public constructor(
    private titleService: Title,
    public gameService: GameService
  ) {}

  ngOnInit() {
    this.setTitle();
  }

  public setTitle(newTitle: string = 'Flopbuster') {
    this.titleService.setTitle(newTitle);
  }

  displayWinner(team) {
    this.winningMessage = team + ' won!';
    this.setTitle('Flopbuster - ' + this.winningMessage);
  }

  setRedTeam() {
    this.currentTeam = 'Red';
    this.teamTextClass = 'redtext';
  }

  setBlueTeam() {
    this.currentTeam = 'Blue';
    this.teamTextClass = 'bluetext';
  }

  toggleKey() {
    if (this.keyVisibility === '') {
      this.keyVisibility = 'hidden';
    } else {
      this.keyVisibility = '';
    }
  }
}
