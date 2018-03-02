import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';
import { catchError } from 'rxjs/operators/catchError';
import { tap } from 'rxjs/operators/tap';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class CompanyService {

  constructor(
    private httpClient: HttpClient
  ) {
    this.loadCompanies();
   }

  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

  companies$: BehaviorSubject<Company[]> = new BehaviorSubject<Company[]>([]);

  getCompanies(): Observable<Company[]> {
    console.log('Service get companies');
    return this.companies$;
  }

  loadCompanies() {
    this.httpClient.get<Company[]>(`${this.API_BASE}/company`)
      .subscribe(companies => {
        console.log('load companies', companies);
        this.companies$.next(companies);
      });
  }

  getCompany(companyId: number): Observable<Company> {
    return this.httpClient.get<Company>(`${this.API_BASE}/company/${companyId}`);
  }

  deleteCompany(companyId: number) {
      this.httpClient.delete<Company>(`${this.API_BASE}/company/${companyId}`)
      .subscribe(d => this.loadCompanies());
  }

  updateCompany(company: Company) {
    this.httpClient.put<Company>(
      `${this.API_BASE}/company/${company.id}`, company,
      { headers: new HttpHeaders().set('content-type', 'application/json') }
    ).subscribe(u => this.loadCompanies());
  }

  addCompany(company: Company) {
    this.httpClient.post<Company>(
      `${this.API_BASE}/company`, company,
      { headers: new HttpHeaders().set('content-type', 'application/json') }
    ).subscribe(u => this.loadCompanies());
  }


  private errorHandler(error: Error): Observable<Company[]> {
    console.error('error caught in service');
    return new EmptyObservable();
  }

}
