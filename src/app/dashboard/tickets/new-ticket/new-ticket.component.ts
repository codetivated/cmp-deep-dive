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
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // @ViewChildren is used to query and access multiple elements, directives, or components in the view DOM of a component class. It returns a QueryList
  // @ViewChild is used to query and access a single element, directive, or component in the view DOM of a component class. It returns the first matching element.

  onSubmit(ticket: { title: string; request: string }) {
    console.log('Form submitted', ticket);
    console.log('Title:', ticket.title);
    console.log('Request:', ticket.request);
    this.form?.nativeElement.reset();
  }
}
