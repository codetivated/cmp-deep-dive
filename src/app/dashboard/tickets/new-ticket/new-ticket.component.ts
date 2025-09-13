import { Component, ViewChild, ElementRef } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { InputComponent } from '../../../shared/input/input.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, InputComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // @ViewChild('form'): Tells Angular to look for a template reference variable (e.g. #form) in the template.
  // form?: The ? means it’s optional — it might be undefined until the view initializes.
  // ElementRef<HTMLFormElement>: This provides direct access to the native DOM node, and the generic HTMLFormElement tells TypeScript what kind of element to expect.

  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  onSubmit(ticket: { title: string; request: string }) {
    console.log('Form submitted', ticket);
    console.log('Title:', ticket.title);
    console.log('Request:', ticket.request);
    this.form?.nativeElement.reset();
  }
}
