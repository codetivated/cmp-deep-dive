import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class InputComponent {
  label = input.required<string>();
}
