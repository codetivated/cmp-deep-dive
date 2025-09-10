import {
  Component,
  HostBinding,
  HostListener,
  inject,
  input,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';

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
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Clicked input');
  // }

  label = input.required<string>();
  private elementRef = inject(ElementRef);

  onClick() {
    console.log('Clicked input');
    console.log(this.elementRef);
  }
}
