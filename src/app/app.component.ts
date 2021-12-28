import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  counter = 12;
  name = 'Angular ' + this.counter;
  customer = {
    name: 'Amit',
    age: 23,
  };
  constructor(private changeDetectorRef: ChangeDetectorRef) {
    // setTimeout(() => {}, 5001);
  }

  changeAngularVersion() {
    this.counter++;
    this.name = 'Angular ' + this.counter;
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked cha');
  }
  char() {
    console.log('cha html');
  }

  updateCustomer() {
    const max = 100;
    const min = 1;
    const newAge = Math.random() * (max - min) + min;
    this.customer.age = Math.floor(newAge);
    // this.customer = { ...this.customer, age: Math.floor(newAge) };
    // this.customer = { ...this.customer };
  }
  click2() {
    this.changeDetectorRef.detectChanges();
  }
}
