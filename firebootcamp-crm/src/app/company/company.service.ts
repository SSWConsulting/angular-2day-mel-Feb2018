import { Injectable } from '@angular/core';
import { Company } from './company';

@Injectable()
export class CompanyService {

  constructor() { }

  getCompanies(): Company[] {
    return [
      {
         name: 'SSW',
         email: 'info@ssw.com.au',
         phone: 1234
      },
      {
        name: 'Microsoft',
        email: 'info@microsoft.com',
        phone: 543221
     },
    ];
  }

}
