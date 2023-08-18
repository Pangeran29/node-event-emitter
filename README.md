## Event Emitter
A basic event emitter and example how to use it

```
function addTicket(ticket, callback) {
    insertToDb(ticket);
    sendEmail(ticket);
    sendSms(ticket);
    callback();
}
```

but with event we can short it with this way:
```
# email sent
# sms sent
# Success to buy ticket
function buyTicket(ticket, callback) {
    // insert to database
    ticketEvent.emit('inserted', ticket);
    callback();
}

```

asynchronus way: 
```
# Success to buy ticket
# email sent
# sms sent
function buyTicket(ticket, callback) {
  // insert to database
  setTimeout(() => {
    ticketEvent.emit('inserted', ticket);
  });
  callback();
}
```
