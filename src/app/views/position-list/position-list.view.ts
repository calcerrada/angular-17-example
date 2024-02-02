import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PlayerItemComponent } from '../../components/player-item/player-item.component';
import { Player } from '../../interfaces/player.interface';
import { PlayersStoreService } from '../../services/players-store/players-store.service';
import { listAnimation } from '../../animations/list-animation';

@Component({
  standalone: true,
  imports: [CommonModule, PlayerItemComponent],
  templateUrl: './position-list.view.html',
  styleUrl: './position-list.view.scss',
  animations: [listAnimation]
 
})
export class PositionListComponent implements OnInit {
  players: Player[] = [];
  playersTotal = 0;

  constructor(private PlayerStore: PlayersStoreService) {}

  private replaceAndUpdate(player: Player){
    const index = this.players.findIndex((item) => item.name === player.name);
    this.players[index] = player;
    this.PlayerStore.updatePlayers(this.players);
  }

  private checkIfAllCompletes() {
    const allCompletes = this.players.every(item => !item.pending);
    if(allCompletes){
      this.players.forEach(item => item.pending = true);
      this.PlayerStore.updatePlayers(this.players);
    }
  }

  private compare(a: Player, b: Player ){
    return  b.gems - a.gems
  }

  onAddGems(player: Player) {
    this.replaceAndUpdate(player)
    this.checkIfAllCompletes();
  }

  ngOnInit(): void {
    this.PlayerStore.players$.subscribe(
      (players) => {
        this.players = [];
        [...players].sort(this.compare).forEach( player => this.players.push(player))
      }
    );
  }
}
