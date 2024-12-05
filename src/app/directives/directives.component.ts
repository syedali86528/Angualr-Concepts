import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  showMessage: boolean = false;

  toggle() {
    this.showMessage = !this.showMessage;
  }

  items: number[] = [1, 2, 3, 4, 5];

  viewMode: any = "home";
}
