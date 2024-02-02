import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Subject, debounce, interval } from 'rxjs';
import { enterItemAnimation } from '../../animations/enter-item';
import { Player } from '../../interfaces/player.interface';

@Component({
  selector: 'ss-player-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-item.component.html',
  styleUrl: './player-item.component.scss',
  animations: [enterItemAnimation]
 
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerItemComponent implements OnInit {
  private nGems = 0;
  private addGemsSubject: Subject<number> = new Subject();
  @Input() player!: Player;
  @Output() addGems: EventEmitter<Player> = new EventEmitter();

  addGem() {
    if(this.nGems < 4){
      ++this.nGems;
    }
    this.addGemsSubject.next(this.nGems);
  }
  ngOnInit(): void {
    this.addGemsSubject.pipe(debounce(() => interval(500))).subscribe((n) => {
      this.player.pending = false;
      this.addGems.emit({...this.player, gems: this.player.gems + n});
      this.nGems = 0;
    });
  }
}
