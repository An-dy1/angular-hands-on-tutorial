import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GameService } from '../game.service';
import { GameTile } from '../models/GameTile';

@Component({
  selector: 'fn-gamegrid',
  templateUrl: './gamegrid.component.html',
  styleUrls: [],
})
export class GameGridComponent {
  @Output() teamWon = new EventEmitter();

  tiles = [
    {
      text: 'Battlefield Earth',
      x: 0,
      y: 0,
      tileType: 'blue',
    },
    {
      text: 'Howard the Duck',
      x: 0,
      y: 1,
      tileType: 'neutral',
    },
    {
      text: 'Batman and Robin',
      x: 0,
      y: 2,
      tileType: 'red',
    },
    {
      text: 'Catwoman',
      x: 1,
      y: 0,
      tileType: 'assassin',
    },
    {
      text: 'Jack and Jill',
      x: 1,
      y: 1,
      tileType: 'blue',
    },
    {
      text: 'Cats',
      x: 1,
      y: 2,
      tileType: 'neutral',
    },
    {
      text: 'Wing Commander',
      x: 2,
      y: 0,
      tileType: 'neutral',
    },
    {
      text: 'Dudley Do-Right',
      x: 2,
      y: 1,
      tileType: 'neutral',
    },
    {
      text: 'Twilight',
      x: 2,
      y: 2,
      tileType: 'red',
    },
  ];

  tileClass00 = '';
  tileClass01 = '';
  tileClass02 = '';
  tileClass10 = '';
  tileClass11 = '';
  tileClass12 = '';
  tileClass20 = '';
  tileClass21 = '';
  tileClass22 = '';

  constructor(private game: GameService) {}

  selectTile(x: number, y: number) {
    let className = this.game.gridKey[x][y];
    this['tileClass' + x + y] = className;
    this.game.countTile(className);
    if (this.game.checkForWinner(className)) {
      this.teamWon.emit(this.game.winner);
    }
    // if check for winner returns true
    // then emit winner
  }
}
