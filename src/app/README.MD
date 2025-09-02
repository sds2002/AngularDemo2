What are Interceptors?

An interceptor is like a middleware that sits between the request and response lifecycle.
Think of it as a gatekeeper:

Before a request leaves your application → an interceptor can modify it.

After a response comes back → an interceptor can modify or handle it before your app processes it.

👉 This is extremely useful for:

Adding authentication tokens automatically to requests.

Logging requests & responses.

Handling global errors (e.g., redirect to login if 401 Unauthorized).

Transforming data before your app consumes it.