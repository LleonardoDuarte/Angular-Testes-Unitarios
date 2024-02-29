import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ListInvestimentsService } from './list-investiments.service';
import { HttpClient } from '@angular/common/http';
import { Investiments } from '../model/Investiments';
import { MOCK_LIST } from './list-investiments.mock';

describe('ListInvestimentsService', () => {
  let service: ListInvestimentsService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  const URL =
    'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json';

  const mockList: Array<Investiments> = MOCK_LIST;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(ListInvestimentsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  // o done basicamente encerra o teste quando usamos ele ao fim de tudo
  it('(U) should be list all investiments', (done) => {
    service.list().subscribe((res: Array<Investiments>) => {
      expect(res[0].name).toEqual('Banco 1');
      expect(res[0].value).toEqual(100);

      expect(res[4].name).toEqual('Banco 5');
      expect(res[4].value).toEqual(10);
      done();
    });

    //Nessa parte primeiro ele verifica se a url é igual a passada, e depois no flush digo que o retorno tem que ser nossa mockList
    const req = httpTestingController.expectOne(URL);
    req.flush(mockList);

    // Aqui eu digo que eu espero que o método de requisição seja um get
    expect(req.request.method).toEqual('GET');
  });
});
