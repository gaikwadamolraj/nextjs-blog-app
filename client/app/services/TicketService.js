import { notFound } from "next/navigation";

export const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:4000/tickets", {
      next: {
        revalidate: 0,
      },
    });
    if (!res.ok) {
      notFound();
    }
    return res.json();
  } catch (error) {
    return [];
  }
};

export const getTicketById = async (ticketId) => {
  try {
    const res = await fetch(`http://localhost:4000/tickets/${ticketId}`, {
      next: {
        revalidate: 60,
      },
    });
    return res.json();
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
