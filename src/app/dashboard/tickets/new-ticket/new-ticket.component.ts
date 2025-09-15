import {
  Component,
  ViewChild,
  ElementRef,
  viewChild,
  AfterViewInit,
  OnInit,
} from '@angular/core';
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
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngOnInit(): void {
    console.log(
      'On Init: component is initialized but template not yet rendered'
    );
    console.log('The form element is:', this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('After View Init: the template is rendered');
    console.log('The form element is:', this.form?.nativeElement);
  }

  onSubmit(ticket: { title: string; request: string }) {
    console.log('Form submitted', ticket);
    console.log('Title:', ticket.title);
    console.log('Request:', ticket.request);

    // this.form?.nativeElement.reset();
    this.form?.nativeElement.reset();
  }
}
