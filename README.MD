1. What are Angular Operators?

In Angular, especially when working with state management (like NgRx, Akita, or plain RxJS), we often deal with observables. Operators are functions that allow you to manipulate, transform, or filter data streams.

Some common operators you’ll see in state management:

Operator	What it does
map	Transforms the emitted value.
filter	Emits only values that pass a condition.
tap	Performs side-effects (like logging) without changing the stream.
switchMap	Maps to a new observable and cancels previous ones.
mergeMap	Maps to a new observable and keeps all previous ones active.
distinctUntilChanged	Emits only if the value has changed.