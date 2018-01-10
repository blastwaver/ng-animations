import { Component } from '@angular/core';
import { fade, slide } from '../animations';
import { trigger, transition,query, style, animate, animateChild, group, stagger } from '@angular/animations';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [
    slide,
    fade,
    trigger('todosAnimation', [
      transition(':enter', [
        group([
          query('h1', [
            style({transform: 'TranslateY(-30px)'}),
            animate(1000)
          ]),
          query('@fade', 
          stagger('200ms',animateChild())),
        ])
      ])
    ])
  ]
})
export class TodoComponent {

  items: any[] = [
    'Eat your self', 
    'Fuck the government', 
    'travel the universe'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = ''; 
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  animationStarted($event){
    console.log($event);    
  }


  animationDone($event){
    console.log($event);
  }

}
