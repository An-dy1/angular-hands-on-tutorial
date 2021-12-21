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

  constructor(public game: GameService) {}

  newSelectTile(tile: GameTile) {
    let selectedClass = tile.tileType;

    this.game.countTile(selectedClass);
    tile.selected = true;
    tile.currentClass = tile.tileType;

    if (this.game.checkForWinner(selectedClass)) {
      this.teamWon.emit(this.game.winner);
    }
  }

  // old version of the above method
  // selectTile(x: number, y: number) {
  //   let className = this.game.gridKey[x][y];
  //   this['tileClass' + x + y] = className;
  //   this.game.countTile(className);
  //   if (this.game.checkForWinner(className)) {
  //     this.teamWon.emit(this.game.winner);
  //   }
  //   // if check for winner returns true
  //   // then emit winner
  // }
}
