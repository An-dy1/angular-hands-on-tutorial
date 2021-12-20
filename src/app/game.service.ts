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

  checkForWinner(tileCategory: string, currentTeam: string) {
    if (this.blueTilesSelected === 2) {
      this.winner = 'blue';
    } else if (this.redTilesSelected === 2) {
      this.winner = 'red';
    } else if (tileCategory === 'assassin') {
      if (currentTeam.toLocaleLowerCase() === 'red') {
        this.winner = 'blue';
      } else {
        this.winner = 'red';
      }
    }

    if (this.winner !== undefined) {
      this.gameOver = true;
      return true;
    } else {
      return false;
    }
  }
}
