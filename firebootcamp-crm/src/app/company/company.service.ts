import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class CompanyService {

  constructor(
    private httpClient: HttpClient
  ) {
   }

  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

  companies: Company[];


  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.API_BASE}/company`)
    .pipe(
      tap(t => console.log('tap!', t)),
      catchError(this.errorHandler)
    );
  }

  deleteCompany(companyId: number): Observable<Company> {

      return this.httpClient.delete<Company>(`${this.API_BASE}/company/${companyId}`);
  }


  private errorHandler(error: Error): Observable<Company[]> {
    console.error('error caught in service');
    return new EmptyObservable();
  }

}
