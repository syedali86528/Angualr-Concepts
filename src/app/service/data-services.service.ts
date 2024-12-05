import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  private dataList: string[] = ['angular', 'react', 'vue']

  getData(): string[] {
    return this.dataList;
  }

  addData(newData: string) {
    this.dataList.push(newData);
  }
}
