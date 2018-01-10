import { trigger, transition, animate, style, state } from '@angular/animations';

export let slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translateX(-20px)'}),
        animate(500)
    ]),

    transition(':leave', [
        animate(500, style({transform: 'translateX(-100%)'}))
    ])
]);

export let fade = trigger('fade',[
    state('void', style({ opacity:0 })),

    transition('void <=> *',[
      animate(500)
    ])

]);