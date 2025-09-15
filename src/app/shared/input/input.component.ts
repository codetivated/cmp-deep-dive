import {
  Component,
  HostBinding,
  HostListener,
  inject,
  input,
  ElementRef,
  ViewEncapsulation,
  ContentChild,
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

  // Accessing projected content with @ContentChild
  // @ContentChild('input') is referencing a template reference variable, so the child content must have that #input reference for Angular to find it.
  @ContentChild('input') private inputVar?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;

  onClick() {
    console.log('Clicked input');
    console.log(this.elementRef);
    console.log(this.inputVar);
  }
}
