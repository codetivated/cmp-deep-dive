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

  // signal version - Angular 16+
  // private form = viewChild<ElementRef<HTMLFormElement>>('form');
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit(ticket: { title: string; request: string }) {
    console.log('Form submitted', ticket);
    console.log('Title:', ticket.title);
    console.log('Request:', ticket.request);

    // this.form?.nativeElement.reset();

    // signal version - Angular 16+
    // this.form()?.nativeElement.reset();
    this.form().nativeElement.reset();
  }
}

//! There is also a viewChildren signal version
//! private buttons = viewChildren<ButtonComponent>('btn');
//! on some method
//! this.buttons().forEach((btn) => console.log(btn));
