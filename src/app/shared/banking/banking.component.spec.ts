import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

import { ListComponent } from '../investiments/components/list/list.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankingComponent, ListComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ******************************************Teste das funções (Unitários)*******************************************

  it('(U) getPoupanca(): should poupanca have value 10', () => {
    expect(component.getPoupanca).toEqual(10);
  });

  it('(U) getCarteira(): should have carteira = 50', () => {
    expect(component.getCarteira).toEqual(50);
  });

  it(`(U) setSacar: should transfer poupanca from carteira`, () => {
    component.setSacar('10');
    fixture.detectChanges();

    expect(component.getPoupanca).toEqual(0);
    expect(component.getCarteira).toEqual(60);
  });

  it('(U) setDepositar(): should transfer carteira from poupanca', () => {
    component.setDepositar('50');
    fixture.detectChanges();
    expect(component.getCarteira).toEqual(0);
    expect(component.getPoupanca).toEqual(60);
  });

  // **********************************************Teste dos IF'S *************************************************

  // Nesse caso a primeira linha de teste verifica se o valor esta passando como string, pois no nosso if ele tem que vir como undefinded, já a segunda linha vefifica se o valor passado está acima do valor padrao de cada método

  it('(U) setSacar(): should transfer poupanca dont have string (isNaN) or poupanca < value...', () => {
    expect(component.setSacar('string')).not.toBeTruthy();
    expect(component.setSacar('11')).not.toBeTruthy();
    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  });

  it('(U) setDepositar(): should transfer poupanca dont have string (isNaN) or poupanca < value...', () => {
    expect(component.setDepositar('string')).not.toBeTruthy();
    expect(component.setDepositar('51')).not.toBeTruthy();
    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  });

  // **********************************************Teste de tela (Interface )***********************************************

  it('(I) setDepositar(): should transfer carteira from poupanca in HTML', () => {
    let element = fixture.debugElement.nativeElement;
    element.querySelector('#input-depositar').value = '10';
    element.querySelector('#depositar').click();
    fixture.detectChanges();

    expect(element.querySelector('#get-poupanca').textContent.trim()).toEqual(
      '20'
    );
    expect(component.getCarteira).toEqual(40);
  });

  it('(I) setSacar(): should transfer poupanca from html in HTML', () => {
    let element = fixture.debugElement.nativeElement;
    element.querySelector('#input-sacar').value = '10';
    element.querySelector('#sacar').click();
    fixture.detectChanges();

    expect(element.querySelector('#get-carteira').textContent.trim()).toEqual(
      '60'
    );

    expect(component.getPoupanca).toEqual(0);
  });
});
