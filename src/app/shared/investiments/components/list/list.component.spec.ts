import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Investiments } from '../../model/Investiments';

import { MOCK_LIST } from '../../services/list-investiments.mock';
import { ListInvestimentsService } from '../../services/list-investiments.service';
import { of } from 'rxjs/internal/observable/of';

const mockList: Array<Investiments> = MOCK_LIST;

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: ListInvestimentsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    service = TestBed.inject(ListInvestimentsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) should list  investiments', () => {
    spyOn(service, 'list').and.returnValue(of(mockList));

    // aqui coloco para no ngOnInit o spyOn vai realizar o retorno da nossa lista
    component.ngOnInit();
    fixture.detectChanges();
    expect(service.list).toHaveBeenCalledWith();
    expect(component.investiments.length).toBe(6);
    expect(component.investiments[4].value).toEqual(10);
    expect(component.investiments[0].name).toEqual('Banco 1');
  });

  it('(I) should list investiments HTML', () => {
    spyOn(service, 'list').and.returnValue(of(mockList));

    component.ngOnInit();
    fixture.detectChanges();

    let investiments =
      fixture.debugElement.nativeElement.querySelectorAll('.list-itens');
    expect(investiments.length).toBe(6);
    expect(investiments[0].textContent.trim()).toEqual('Banco 1 - 100');
  });
});
