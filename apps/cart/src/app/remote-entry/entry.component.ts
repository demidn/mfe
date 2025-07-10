import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'app-cart-entry',
  template: `<app-nx-welcome></app-nx-welcome>`,
})
export class RemoteEntryComponent {
  route = inject(ActivatedRoute);

  constructor() {
    console.log('ROUTE: ', this.route);
  }
}
