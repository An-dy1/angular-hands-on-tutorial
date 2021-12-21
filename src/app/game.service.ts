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

  gridKey = [
    ['blue', 'neutral', 'red'],
    ['assassin', 'blue', 'neutral'],
    ['neutral', 'neutral', 'red'],
  ];

  tiles: GameTile[] = [
    {
      text: 'Battlefield Earth',
      x: 0,
      y: 0,
      tileType: 'blue',
      selected: false,
    },
    {
      text: 'Howard the Duck',
      x: 0,
      y: 1,
      tileType: 'neutral',
      selected: false,
    },
    {
      text: 'Batman and Robin',
      x: 0,
      y: 2,
      tileType: 'red',
      selected: false,
    },
    {
      text: 'Catwoman',
      x: 1,
      y: 0,
      tileType: 'assassin',
      selected: false,
    },
    {
      text: 'Jack and Jill',
      x: 1,
      y: 1,
      tileType: 'blue',
      selected: false,
    },
    {
      text: 'Cats',
      x: 1,
      y: 2,
      tileType: 'neutral',
      selected: false,
    },
    {
      text: 'Wing Commander',
      x: 2,
      y: 0,
      tileType: 'neutral',
      selected: false,
    },
    {
      text: 'Dudley Do-Right',
      x: 2,
      y: 1,
      tileType: 'neutral',
      selected: false,
    },
    {
      text: 'Twilight',
      x: 2,
      y: 2,
      tileType: 'red',
      selected: false,
    },
  ];

  setTileAsSelected(index: number) {
    this.tiles[index].selected = true;
  }

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
