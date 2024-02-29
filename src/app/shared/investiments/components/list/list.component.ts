import { Component, OnInit } from '@angular/core';
import { Investiments } from '../../model/Investiments';
import { ListInvestimentsService } from '../../services/list-investiments.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public investiments!: Array<Investiments>;
  // [
  //   {
  //     name: 'itaú',
  //     value: 100,
  //   },
  //   {
  //     name: 'bradesco',
  //     value: 50,
  //   },
  //   {
  //     name: 'nubank',
  //     value: 1020,
  //   },
  //   {
  //     name: 'inter',
  //     value: 30,
  //   },
  // ];

  constructor(private listInvestiments: ListInvestimentsService) {}

  ngOnInit(): void {
    this.listInvestiments.list().subscribe((res) => (this.investiments = res));
  }
}
