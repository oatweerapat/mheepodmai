import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface FormData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/product']);
  }
}

