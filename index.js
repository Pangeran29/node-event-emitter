const { buyTicket } = require('./src/ticketing');

buyTicket('a1b2', () => {
  console.log('Success to buy ticket');
});
