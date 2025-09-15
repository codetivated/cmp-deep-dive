import {
  Component,
  HostBinding,
  HostListener,
  inject,
  input,
  ElementRef,
  ViewEncapsulation,
  ContentChild,
  contentChild,
  AfterContentInit,
  afterRender,
  afterNextRender,
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
export class InputComponent implements AfterContentInit {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Clicked input');
  // }

  label = input.required<string>();
  private elementRef = inject(ElementRef);

  // Accessing projected content with @ContentChild
  // @ContentChild('input') is referencing a template reference variable, so the child content must have that #input reference for Angular to find it.
  // @ContentChild('input') private inputVar?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;

  private inputVar =
    contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
      'input'
    );

  constructor() {
    afterRender(() => {
      console.log('After Render: the view has been rendered');
      console.log('The input element is:', this.inputVar());
    });

    afterNextRender(() => {
      console.log('After Next Render: the view has been rendered');
      console.log('The input element is:', this.inputVar());
    });
  }

  ngAfterContentInit(): void {
    // console.log('After Content Init: projected content is set');
    // console.log('The input element is:', this.inputVar());
  }

  onClick() {
    // console.log('Clicked input');
    // console.log(this.elementRef);
    // console.log(this.inputVar());
  }
}
