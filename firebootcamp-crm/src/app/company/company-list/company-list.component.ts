import { Component, OnInit } from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies: Company[];

  constructor() { }

  ngOnInit() {
    this.initCompanies();
  }

  initCompanies() {
    this.companies = [
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
