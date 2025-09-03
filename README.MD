1. What is a Subject in Angular?

In Angular (and RxJS in general), a Subject is a special type of Observable that allows multicasting.

Key points:

A Subject is both an Observable and an Observer:

You can subscribe to it (like an Observable).

You can emit values into it (like an Observer).

All subscribers get the same value emitted by the Subject.

Useful for sharing data between components/services.

Types of Subjects

Subject – Normal behavior, subscribers only get future values.

BehaviorSubject – Stores the last emitted value, new subscribers get that immediately.

ReplaySubject – Stores a buffer of previous values, new subscribers get all previous.

AsyncSubject – Emits only the last value when complete.