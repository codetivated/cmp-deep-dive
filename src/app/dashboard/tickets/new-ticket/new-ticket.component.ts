import { Component, ViewChild, ElementRef, viewChild } from '@angular/core';
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
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit(ticket: { title: string; request: string }) {
    console.log('Form submitted', ticket);
    console.log('Title:', ticket.title);
    console.log('Request:', ticket.request);

    // this.form?.nativeElement.reset();
    this.form().nativeElement.reset();
  }
}
