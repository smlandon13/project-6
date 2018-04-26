import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {

  displayedColumns = [];

  dataSource: MatTableDataSource <any> = new MatTableDataSource<any>([]);
  numHoles: number = 18;

  playerName: string = '';

  constructor() {
    this.displayedColumns.push('player');

    for (let i = 0; i < this.numHoles; i++) {
      const name = `${i + 1}`;
      this.displayedColumns.push(name);
    }

    this.displayedColumns.push('total');
  }

  ngOnInit() {
    this.getScoreCards();
  }

  /**
   * This is where you would fetch scorecard data
   */
  getScoreCards() {
    const scoreCardData = [
      { 'player': 'John', '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, 'total': 0 },
      { 'player': 'Jane', '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, 'total': 0 },
      { 'player': 'Sam', '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, 'total': 0 },
      { 'player': 'Brian', '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, 'total': 0 },
      { 'player': 'Sally', '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, 'total': 0 }
    ];
    this.dataSource = new MatTableDataSource<any>(scoreCardData);
  }

  createNewPlayer() {
    this.dataSource.data.push({'player':
    this.playerName, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0,
      '8': 0, '9': 0, 'total': 0 });
    this.dataSource = new MatTableDataSource<any>(this.dataSource.data);
  }
}
