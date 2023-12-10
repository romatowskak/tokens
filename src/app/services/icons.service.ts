import { DomSanitizer } from '@angular/platform-browser';
import { Injectable, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable({
  providedIn: 'root',
})
export class IconsService {
  private matIconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  icons = [
    {
      name: 'facebook',
      url: 'assets/icons/facebook.svg',
    },
    {
      name: 'google',
      url: 'assets/icons/google.svg',
    },
    {
      name: 'twitter',
      url: 'assets/icons/twitter.svg',
    },
  ];

  registerIcons(): void {
    this.icons.forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon.name,
        this.sanitizer.bypassSecurityTrustResourceUrl(icon.url)
      );
    });
  }
}
