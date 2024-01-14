import { getTicketById } from "@/app/services/TicketService";
import React from "react";

// export const dynamicParams = false; // default val = true

// export async function generateStaticParams() {
//   const res = await fetch("http://localhost:4000/tickets");

//   const tickets = await res.json();

//   return tickets.map((ticket) => ({
//     id: ticket.id,
//   }));
// }

export default async function Ticket({ params }) {
  const ticket = await getTicketById(params.id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
