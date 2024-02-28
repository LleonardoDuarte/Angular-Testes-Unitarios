import { Component, OnInit } from '@angular/core';
import { Investiments } from '../../model/Investiments';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public investiments: Array<Investiments> = [
    {
      name: 'itaú',
      value: 100,
    },
    {
      name: 'bradesco',
      value: 50,
    },
    {
      name: 'nubank',
      value: 1020,
    },
    {
      name: 'inter',
      value: 30,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
