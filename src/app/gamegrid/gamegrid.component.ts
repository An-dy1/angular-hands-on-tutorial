import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'fn-gamegrid',
  templateUrl: './gamegrid.component.html',
  styleUrls: [  ]
})
export class GameGridComponent  {
  @Input() currentTeam: string;
  @Output() teamWon = new EventEmitter();

  tileClass00 = "";
  tileClass01 = "";
  tileClass02 = "";
  tileClass10 = "";
  tileClass11 = "";
  tileClass12 = "";
  tileClass20 = "";
  tileClass21 = "";
  tileClass22 = "";


  constructor(private game: GameService) {}

  
  selectTile(x:number,y:number) {
    let className = this.game.gridKey[x][y];
    this["tileClass" + x + y] = className;
    this.game.countTile(className);
    if(this.game.checkForWinner(className, this.currentTeam)) {
      this.teamWon.emit(this.game.winner);
    }
    // if check for winner returns true
    // then emit winner
  }

  
}