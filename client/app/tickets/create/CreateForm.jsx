"use client";

import { createTicket } from "@/app/services/TicketService";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateForm() {
  const route = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("low");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const payload = {
      title,
      body,
      priority,
      user_email: "gaikwadamolraj@gmail.com",
    };
    route.refresh();
    route.push("/tickets");
    // const res = await createTicket({ payload });
    // if (res.status === 201) {
    //   route.refresh();
    //   route.push("/tickets");
    // } else {
    //   setErrorMessage(res.error);
    // }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-1/2">
        <label>
          <span>Title:</span>
          <input
            required
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Body:</span>
          <textarea
            required
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />
        </label>
        <label>
          <span>Priority:</span>
          <select
            onChange={(e) => setPriority(e.target.value)}
            value={priority}
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
        </label>
        <button className="btn-primary" disabled={isLoading}>
          {isLoading && <span>Adding...</span>}
          {!isLoading && <span>Add Ticket</span>}
        </button>
      </form>

      {errorMessage && (
        <div role="alert" className="w-1/2 ">
          <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Danger
          </div>
          <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>Something not ideal might be happening.</p>
          </div>
        </div>
      )}
    </>
  );
}
