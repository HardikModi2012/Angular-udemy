import { trigger, state, transition, style, animate, keyframes } from '@angular/animations';


export let slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translateX(-10px)'}),
        animate(500)
    ]),

    transition(':leave',
    [
        animate('500ms ease-in', keyframes([
            style({ offset: 0.2,
                opacity : 1,
                transform: 'translateX(20px)'
        }),

        style({
            offset: 1,
            opacity : 0,
            transform: 'translateX(-100%)'
         }),
        ]))
    ])
]);

export let fade = trigger('fade',
    [
      state('void', style({ opacity: 0})),

      transition('void => *, * => void', [
        animate(2000)
      ])
      // transition('* => void', [
      //   animate(2000)
      // ])
    ]);
