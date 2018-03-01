import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies: Company[];

  constructor(
    private companyService: CompanyService
  ) {
  }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companyService.getCompanies()
    .subscribe(
      next => this.companies = next,
      error => console.error('error caught in component', error),
      () => console.log('complete')
    );
  }


  deleteCompany(toDelete: Company) {
    this.companyService.deleteCompany(toDelete.id)
      .subscribe(c => this.getCompanies());
  }



}
