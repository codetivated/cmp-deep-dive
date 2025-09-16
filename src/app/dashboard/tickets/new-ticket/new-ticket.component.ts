import {
  Component,
  ViewChild,
  ElementRef,
  viewChild,
  AfterViewInit,
  OnInit,
  output,
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
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  enteredTitle = '';
  enteredRequest = '';

  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  addTicket = output<{ title: string; request: string }>();

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

  onSubmit() {
    const ticket = { title: this.enteredTitle, request: this.enteredRequest };
    this.addTicket.emit(ticket);
    // this.form?.nativeElement.reset();
    this.enteredTitle = '';
    this.enteredRequest = '';
  }
}
