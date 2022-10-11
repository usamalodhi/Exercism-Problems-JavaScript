// Creates a new visitor.
const createVisitor = (name, age, ticketId) => {
  return { name, age, ticketId };
};

// Revokes a ticket for a visitor.
const revokeTicket = (visitor) => {
  visitor.ticketId = null;
  return visitor;
};

// Determines the status a ticket has in the ticket tracking object.
const ticketStatus = (tickets, ticketId) => {
  if (tickets[ticketId] === undefined) {
    return 'unknown ticket id';
  }
  if (tickets[ticketId] === null) {
    return 'not sold';
  }
  return `sold to ${tickets[ticketId]}`;
};

// Determines the status a ticket has in the ticket tracking object  and returns a simplified status message.
const simpleTicketStatus = (tickets, ticketId) => {
  return tickets[ticketId] ?? 'invalid ticket !!!';
};

// Determines the version of the GTC that was signed by the visitor.
const gtcVersion = (visitor) => {
  return visitor.gtc?.version;
};
