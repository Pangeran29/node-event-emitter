## When to use Event Emitter
Whenever it makes sense for code to SUBSCRIBE to something rather than get a callback from something. The typical use case would be that there's multiple blocks of code in your application that may need to do something when an event happens.

For example, let's say you are creating a ticketing system. The common way to handle things might be like this:

```
function addTicket(ticket, callback) {
    insertTicketIntoDatabase(ticket, function(err) {
        if (err)
            return handleError(err);

        callback();
    });
}
```
