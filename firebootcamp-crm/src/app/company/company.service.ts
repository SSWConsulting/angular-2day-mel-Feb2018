import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CompanyService {

  constructor(
    private httpClient: HttpClient
  ) {
   }

  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

  companies: Company[];


  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.API_BASE}/company`);
  }
    // return [
    //   {
    //      name: 'SSW',
    //      email: 'info@ssw.com.au',
    //      phone: 1234
    //   },
    //   {
    //     name: 'Microsoft',
    //     email: 'info@microsoft.com',
    //     phone: 543221
    //  },
    // ];
  //}

}
