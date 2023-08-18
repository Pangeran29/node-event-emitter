const { ticketEvent } = require('./ticketing.event');

function buyTicket(ticket, callback) {
  // insert to database
  ticketEvent.emit('inserted', ticket);
  callback();
}

module.exports = {
  buyTicket
}