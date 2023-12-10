import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input'; // Add this import
import { MatButtonModule } from '@angular/material/button'; // Add this import
import { IconsService } from './services/icons.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private iconsService = inject(IconsService);

  theme: 'light' | 'dark' = 'light';

  constructor() {
    this.iconsService.registerIcons();
    document.body.classList.toggle(this.theme);
  }

  toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';

    document.body.classList.remove(this.theme === 'dark' ? 'light' : 'dark');
    document.body.classList.toggle(this.theme);
  }
}
