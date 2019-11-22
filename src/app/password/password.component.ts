import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  showPassword = false;
  buttonClicks = [];
  click = 0;
  constructor() { }

  ngOnInit() {
  }
  onDisplayClick() {
    this.showPassword = !this.showPassword;
    this.click++;
    // this.buttonClicks.push(this.click)
    this.buttonClicks.push(new Date())
  }

}
