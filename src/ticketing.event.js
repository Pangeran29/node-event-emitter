const eventsEmitter = require('../lib/event');

const ticketEvent = new eventsEmitter();

ticketEvent.on('inserted', function(ticket) {
  // email user after insert
  console.log('email sent');
});

ticketEvent.on('inserted', function(ticket) {
  // sms user after insert
  console.log('sms sent');
});

module.exports = {
  ticketEvent
}
