import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  onUserSubmit(values: any) {
    localStorage.setItem('email', JSON.stringify(values.value));
  }

  ngOnInit(): void {}
}
