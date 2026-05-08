import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserForm } from './components/user-form/user-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend-test');
}
