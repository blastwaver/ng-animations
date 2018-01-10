import { trigger, transition, animate, style, state, keyframes, animation, useAnimation } from '@angular/animations';

export let slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translateX(-20px)'}),
        animate(500)
    ]),

    transition(':leave', [
        animate('0.5s ease-out', keyframes([
            style({
                offset: .2,
                opacity: 1,
                transform: 'translateX(20px)'
            }),
            style({
                offset: 1,
                opacity: 0,
                transform: 'translateX(-100%)'  
            })
        ]))
    ])
]);

export let fadeInAnimation = animation([
    style({ opacity:0 }),
    animate('{{ duration }} {{easing}}')
], {
    params: {
        duration: '0.5s',
        easing: 'ease-out'
    }
})

export let fade = trigger('fade',[

    transition(':enter',[
      useAnimation(fadeInAnimation,{
          params: {
              duration: '2000ms',
            //   easing: 'ease-in'
          }
      })
    ]),

    transition(':leave',[
        // state('*',style({opacity:1}),
        animate(500, style({opacity:0}))
    ])
]);

