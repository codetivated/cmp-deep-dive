import { Component } from '@angular/core';
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
  onSubmit(ticket: { title: HTMLInputElement; request: HTMLTextAreaElement }) {
    console.log('Form submitted', ticket);
    console.log('Title:', ticket.title.value);
    console.log('Request:', ticket.request.value);
  }
}
