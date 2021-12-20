import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  blueTilesSelected = 0;
  redTilesSelected = 0;
  winner: string;
  gameOver = false;

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

  setWinner(winningTeam: string) {
    this.winner = winningTeam;
    this.gameOver = true;
  }

  checkForWinner(tileCategory: string, currentTeam: string) {
    if (this.blueTilesSelected === 2) {
      this.setWinner('blue');
    } else if (this.redTilesSelected === 2) {
      this.setWinner('red');
    } else if (tileCategory === 'assassin') {
      if (currentTeam.toLocaleLowerCase() === 'red') {
        this.setWinner('blue');
      } else {
        this.setWinner('red');
      }
    }

    return this.gameOver;
  }
}
