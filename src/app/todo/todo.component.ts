import { Component } from '@angular/core';
import { fade, slide } from '../animations';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [
    fade,
    slide
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
