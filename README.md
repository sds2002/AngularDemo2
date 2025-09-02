Explanation

Routing: Maps URL paths to Angular components.

Guard (canActivate): Runs before navigating to a route.

If guard returns true → access allowed.

If guard returns false → navigation blocked (we redirected to home).

In real apps, you’d replace isLoggedIn with a real AuthService check (JWT token, session, etc.).