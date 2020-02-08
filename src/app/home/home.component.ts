import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent  {
  getInputValue(e: Event): string {
    return e.target instanceof HTMLInputElement ? e.target.value : '';
  }
}
