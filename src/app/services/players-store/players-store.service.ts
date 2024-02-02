import { Injectable } from '@angular/core';
import { Player } from '../../interfaces/player.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { INITIAL_PLAYERS_DATA } from './players-data';

@Injectable({
  providedIn: 'root'
})
export class PlayersStoreService {
  players: Player[] = INITIAL_PLAYERS_DATA;
  private playersSubject: BehaviorSubject<Player[]> = new BehaviorSubject(this.players);
  players$: Observable<Player[]> = this.playersSubject.asObservable();


  updatePlayers(players: Player[]){
    this.players = [...players];
    this.playersSubject.next(this.players)
  }

  
}
