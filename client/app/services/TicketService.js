import { notFound } from "next/navigation";
const tickets = [
  {
    title: "Sample",
    body: "My new sample ticket",
    priority: "low",
    user_email: "mario@netninja.dev",
    id: "IFR9_fC",
  },
  {
    title: "Pulumi IAC ",
    body: "Not able to create GCP cluster using pulumi with node js on mac os.",
    priority: "high",
    user_email: "gaikwadamolraj@gmail.com",
    id: "ycqcPmt",
  },
];
export const getTickets = async () => {
  try {
    // const res = await fetch("http://localhost:4000/tickets", {
    //   next: {
    //     revalidate: 0,
    //   },
    // });
    // if (!res.ok) {
    //   notFound();
    // }
    return tickets;
  } catch (error) {
    return [];
  }
};

export const getTicketById = async (ticketId) => {
  try {
    // const res = await fetch(`http://localhost:4000/tickets/${ticketId}`, {
    //   next: {
    //     revalidate: 60,
    //   },
    // });
    ticket = tickets.filter((t) => t.id === ticketId);
    console.log(" ticket ", ticketId, ticket);
    return ticket;
  } catch (error) {
    return [];
  }
};

export const createTicket = async ({ payload }) => {
  try {
    return await fetch("http://localhost:4000/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    return { error: error?.message || "Failed to create ticket." };
  }
};
