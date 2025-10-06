import { Component } from '@angular/core';

type DataRecord = {
  name: string;
  age: number;
  job: string;
  employed: boolean;
};

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.html',
  styleUrl: './table.css'
})

export class Table {
  data: DataRecord[] = [
    {name: 'can', age: 29, job: 'endustri muh.', employed: false},
    {name: 'ozk', age: 29, job: 'pc muh.', employed: false},
    {name: 'hanzo', age: 29, job: 'bos isler muh.', employed: true},
  ];

  headers: {key: keyof DataRecord, label: string}[] = [
    { key: 'employed', label: 'Aldigi ucretten memnun mu?'},
    { key: 'name', label: 'Ad Soyad'},
    { key: 'age', label: 'Yas'},
    { key: 'job', label: 'Meslek'}
  ]

  formatValue(key: keyof DataRecord, value: any):string {
    if (key === 'employed') {
      return value ? 'Memnun' : 'Memnun degil';
    }
    return value;
  }

}
