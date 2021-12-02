import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contactmanager-app',
  template: `
    <app-sidenav></app-sidenav>
  `,
  styles: [
  ]
})
export class ContactmanagerAppComponent implements OnInit {

  constructor(iconResgistry: MatIconRegistry, sanitizer:DomSanitizer) { 
    iconResgistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assests/avatar.svg'));

  }
  ngOnInit(): void {
  }

}
