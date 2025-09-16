import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAddTicket(ticket: { title: string; request: string }) {
    const newTicket: Ticket = {
      id: crypto.randomUUID(),
      title: ticket.title,
      request: ticket.request,
      status: 'open',
    };
    this.tickets.push(newTicket);
  }

  onCloseTicket(ticketId: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === ticketId) {
        return { ...ticket, status: 'closed' };
      }
      return ticket;
    });
  }
}
