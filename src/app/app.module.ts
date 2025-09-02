import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth.interceptor';
@NgModule({
 
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true, // allows multiple interceptors
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }