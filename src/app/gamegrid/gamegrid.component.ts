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

  tileClass00 = '';
  tileClass01 = '';
  tileClass02 = '';
  tileClass10 = '';
  tileClass11 = '';
  tileClass12 = '';
  tileClass20 = '';
  tileClass21 = '';
  tileClass22 = '';

  constructor(public game: GameService) {}

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

  newSelectTile(index: number) {
    // console.log(`${this.game.tiles[index].text}`);
    let selectedClass = this.game.tiles[index].tileType;
    this.game.countTile(selectedClass);

    this.game.setTileAsSelected(index);
    console.log(`${this.game.tiles[index].selected}`);

    if (this.game.checkForWinner(selectedClass)) {
      this.teamWon.emit(this.game.winner);
    }
  }
}
