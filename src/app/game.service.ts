import { Injectable } from '@angular/core';
import { Team } from './models/team';
import { GameTile } from './models/GameTile';

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

  tiles: GameTile[] = [
    {
      text: 'Battlefield Earth',
      x: 0,
      y: 0,
      tileType: 'blue',
      selected: false,
      currentClass: '',
    },
    {
      text: 'Howard the Duck',
      x: 0,
      y: 1,
      tileType: 'neutral',
      selected: false,
      currentClass: '',
    },
    {
      text: 'Batman and Robin',
      x: 0,
      y: 2,
      tileType: 'red',
      selected: false,
      currentClass: '',
    },
    {
      text: 'Catwoman',
      x: 1,
      y: 0,
      tileType: 'assassin',
      selected: false,
      currentClass: '',
    },
    {
      text: 'Jack and Jill',
      x: 1,
      y: 1,
      tileType: 'blue',
      selected: false,
      currentClass: '',
    },
    {
      text: 'Cats',
      x: 1,
      y: 2,
      tileType: 'neutral',
      selected: false,
      currentClass: '',
    },
    {
      text: 'Wing Commander',
      x: 2,
      y: 0,
      tileType: 'neutral',
      selected: false,
      currentClass: '',
    },
    {
      text: 'Dudley Do-Right',
      x: 2,
      y: 1,
      tileType: 'neutral',
      selected: false,
      currentClass: '',
    },
    {
      text: 'Twilight',
      x: 2,
      y: 2,
      tileType: 'red',
      selected: false,
      currentClass: '',
    },
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
