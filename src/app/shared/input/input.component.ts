import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  encapsulation: ViewEncapsulation.None,
  host: { class: 'control', '(click)': 'onClick()' },
})
export class InputComponent {
  label = input.required<string>();

  onClick() {
    console.log('Clicked input');
  }
}
