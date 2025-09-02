import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  onSubmit(form: NgForm) {
    console.log('Form submitted!', form.value);
    alert("User Registered: " + JSON.stringify(form.value));
  }
}
