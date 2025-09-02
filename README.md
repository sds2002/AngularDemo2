1) The big picture (how Angular routing works)

RouterModule registers the Angular router and the route table (your routes array).

<router-outlet> is the placeholder in the DOM where the matched component will be inserted.

[routerLink] builds in-app links that the router intercepts (no full page reload) and pushes a new URL into browser history (HTML5 pushState).

Route parameters (e.g. :id) are parts of the URL path you can read at runtime using ActivatedRoute.

2) app-routing.module.ts — route definitions

Key parts:

const routes: Routes = [
  { path: '', component: HomeComponent },                // default route
  { path: 'user/:id', component: UserDetailComponent }, // route with param
];
@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule { }


Explanation:

path: '' matches the root URL http://.../ and renders HomeComponent.

path: 'user/:id' declares a route with a route parameter named id. Example URL: /user/3.

RouterModule.forRoot(routes) wires up the router in the root module. (For feature modules, use forChild.)

Notes:

Order matters: first matching path wins (more specific routes should be above broader ones when ambiguous).

If you redirect to '', you often use pathMatch: 'full' to avoid partial matches.

3) app.component.html — where routed views appear
<h1>Angular Routing Demo</h1>
<router-outlet></router-outlet>


<router-outlet> is replaced with the component associated with the matched route. Nothing magical — that’s how Angular injects routed components into the page.

4) HomeComponent — linking with parameters

home.component.ts has a users array. In the template you used:

<a [routerLink]="['/user', user.id]">{{ user.name }}</a>


Explanation:

[routerLink] receives an array where each element becomes a segment of the URL. ['/user', user.id] → /user/1.

The router intercepts the click and navigates without a full page refresh.

Using the binding array form is safer than string concatenation (handles encoding and relative links cleanly).

Relative links:

To build a link relative to current route: [routerLink]="['./', user.id]" with relativeTo: this.route when navigating programmatically.

5) UserDetailComponent — reading route params

You used:

constructor(private route: ActivatedRoute) {}
ngOnInit(): void {
  this.userId = Number(this.route.snapshot.paramMap.get('id'));
}


What this does:

ActivatedRoute gives access to parameters and query params for the active route.

route.snapshot.paramMap.get('id') returns the id as string | null.

Number(...) converts the string to a number (result may be NaN if not numeric).

Important nuance — snapshot vs observables:

route.snapshot is a single snapshot at the moment the component is created. If the router re-uses the same component instance for a different id (common when only param changes), snapshot won't update.

Use the observable version to react to param changes:

this.route.paramMap.subscribe(params => {
  const id = params.get('id');
  this.userId = id !== null ? +id : null; // +id is shorthand for Number(id)
});


Remember to unsubscribe (or use RxJS takeUntil) to avoid memory leaks on long-lived subscriptions.

Safer conversion:

const idParam = this.route.snapshot.paramMap.get('id');
if (idParam) {
  this.userId = parseInt(idParam, 10); // explicit radix
} else {
  // handle missing id (show error or redirect)
}

6) Runtime flow — what happens when you click a user link

User clicks <a [routerLink]="['/user', 2]">.

Angular router intercepts the click, prevents a normal HTTP navigation.

Router finds the route that matches /user/2 ({ path: 'user/:id', component: UserDetailComponent }).

Router creates (or reuses) the UserDetailComponent and inserts it into <router-outlet>.

Inside ngOnInit, ActivatedRoute provides the id parameter; you read and use it (display, fetch data, etc.).

Browser URL becomes /user/2 and back/forward buttons work as usual.

7) Common pitfalls & how to fix them

Pitfall: component not updating when param changes

Problem: component instance reused, snapshot unchanged.

Fix: subscribe to paramMap (see above) to react to changes.

Pitfall: paramMap.get('id') returns null

Always handle null. The route may not match or param may be missing.

Example:

const idParam = this.route.snapshot.paramMap.get('id');
if (!idParam) {
  // redirect or show "not found"
  this.router.navigate(['/']);
  return;
}
this.userId = +idParam;


Pitfall: parsing ints unsafely

Use parseInt(idParam, 10) or +idParam but also check Number.isInteger / isNaN for validation.

8) Query params vs route params

Route param example: /user/3 — matched by :id.

Query param example: /user/3?tab=posts — available via this.route.snapshot.queryParamMap.get('tab') or this.route.queryParams observable.

To navigate with query params:

this.router.navigate(['/user', id], { queryParams: { tab: 'posts' } });

9) Programmatic navigation

Instead of anchor links, you can navigate from TypeScript:

constructor(private router: Router) {}
goToUser(id: number) {
  this.router.navigate(['/user', id]);
}


You can also pass query params, fragments, replaceUrl, etc.

10) Fetching user data using the id (practical improvement)

Instead of just showing the id, fetch data from a service (or use a resolver to fetch before route activates).

Service approach (in component):

ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const id = params.get('id');
    if (!id) return;
    this.userService.getUserById(+id).subscribe(user => this.user = user);
  });
}


Resolver approach (load before navigation):

Create UserResolver implements Resolve<User> that calls the service.

In routes:

{ path: 'user/:id', component: UserDetailComponent, resolve: { user: UserResolver } }


Then in UserDetailComponent you read resolved data: this.route.snapshot.data['user'].

Resolvers give a nicer UX (show loading indicator while router waits), and keep components simpler.

11) Small improvements / UX touches

Highlight active link: <a routerLink="/user/1" routerLinkActive="active">

Force exact match for home: [routerLinkActiveOptions]="{ exact: true }"

Guard routes with canActivate to protect pages.

Lazy-load big feature modules with loadChildren to improve initial load.