import { animate, style, transition, trigger } from '@angular/animations';

export const enterItemAnimation = trigger('enterItem', [
  transition(':enter', [
    style({
      transform: 'translateX(-100%)',
      opacity: 0,
    }),
    animate(
      '.7s ease-in-out',
      style({
        transform: 'translateX(0)',
        opacity: '1',
      })
    ),
  ]),
  transition(':leave', [
    style({
      transform: 'translateX(0)',
      opacity: '1',
    }),
    animate(
      '.5s ease-out',
      style({
        transform: 'translateX(100%)',
        opacity: '0',
      })
    ),
  ]),
]);
