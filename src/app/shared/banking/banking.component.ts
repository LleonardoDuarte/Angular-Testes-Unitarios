import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss'],
})
export class BankingComponent implements OnInit {
  private poupanca: number = 10;
  private carteira: number = 10;
  constructor() {}

  ngOnInit(): void {}

  // Nessas funções eu pego o input digitado pelo usuario (que por momento apesar de ele digitar um numero será uma string), depois eu converto essa string em number e armazeno em uma const chamada sacar
  public setSacar(value: string): number | undefined {
    const sacar = Number(value);

    if (isNaN(sacar) || this.poupanca < sacar) {
      return;
    }

    this.poupanca -= sacar;
    return (this.carteira += sacar);
  }
  public setDepositar(value: string): number | undefined {
    const depositar = Number(value);

    if (isNaN(depositar) || this.carteira < depositar) {
      return;
    }
    this.carteira -= depositar;
    return (this.poupanca += depositar);
  }

  // Nesses dois get's eu pego os valores das das duas declarações que criei la em cima referenciando carteira e poupança e jogo uma interpolação no HTML

  get getPoupanca(): number {
    return this.poupanca;
  }

  get getCarteira(): number {
    return this.carteira;
  }
}
