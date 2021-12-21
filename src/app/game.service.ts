import { Injectable } from '@angular/core';
import { Team } from './models/team';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  blueTilesSelected = 0;
  redTilesSelected = 0;

  gameOver = false;

  redTeam: Team = {
    name: 'Red',
    color: 'red',
  };
  blueTeam: Team = {
    name: 'Blue',
    color: 'blue',
  };

  currentTeam: Team = this.redTeam;

  winner: Team;

  gridKey = [
    ['blue', 'neutral', 'red'],
    ['assassin', 'blue', 'neutral'],
    ['neutral', 'neutral', 'red'],
  ];

  countTile(tileCategory: string) {
    if (tileCategory === 'blue') {
      this.blueTilesSelected++;
    } else if (tileCategory === 'red') {
      this.redTilesSelected++;
    }
  }

  setWinner(winningTeam: Team) {
    this.winner = winningTeam;
    this.gameOver = true;
  }

  checkForWinner(tileCategory: string) {
    if (this.blueTilesSelected === 2) {
      this.setWinner(this.blueTeam);
    } else if (this.redTilesSelected === 2) {
      this.setWinner(this.redTeam);
    } else if (tileCategory === 'assassin') {
      if (this.currentTeam === this.redTeam) {
        this.setWinner(this.blueTeam);
      } else {
        this.setWinner(this.redTeam);
      }
    }

    return this.gameOver;
  }
}
