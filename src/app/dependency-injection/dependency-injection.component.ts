import { Component, OnInit } from '@angular/core';
import { DataServicesService } from '../service/data-services.service';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css'],
})
export class DependencyInjectionComponent implements OnInit {

  data: string[] = [];
  newItem: string = '';

  constructor(private dataService: DataServicesService) { }

  ngOnInit(): void {
    this.data = this.dataService.getData();
  }

  addData() {
    this.dataService.addData(this.newItem);
    this.newItem = ''
  }
}
