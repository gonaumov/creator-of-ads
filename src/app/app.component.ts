import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Creator of ads';
  getInputValue(e: Event): string {
    return e.target instanceof HTMLInputElement ? e.target.value : '';
  }
}
