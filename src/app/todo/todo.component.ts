import { Component } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [
    trigger('fade',[
      state('void', style({ opacity:0 })),
      // transition(':enter, :leave',[
      //   animate(2000)
      // ]),
      transition('void <=> *',[
        animate(2000)
      ]),
      // transition('* => void',[
      //   animate(500)
      // ])
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

}
