1. What are Observables in Angular?

In Angular, Observables come from RxJS (Reactive Extensions for JavaScript). They are used to handle asynchronous operations, like:

HTTP requests (HttpClient)

User input events

Timers or intervals

WebSocket messages

Think of an Observable as a stream of data over time, which you can subscribe to and react whenever a new value comes in.

Key concepts

Observable – the source of data (like a stream).

Observer – defines how to react to data (next, error, complete).

Subscription – connects the observer to the observable.

Operators – functions that let you transform or filter the data stream (like map, filter, tap).

2. Why use Observables?

They are lazy: code doesn’t run until you subscribe.

They handle multiple values over time, unlike Promises which resolve once.

They integrate well with Angular’s reactive forms and HttpClient.