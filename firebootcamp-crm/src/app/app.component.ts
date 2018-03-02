import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company/company.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators/filter';

@Component({
  selector: 'fbc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'fbc';

  companiesCount$: Observable<number>;

  constructor(
    private companyService: CompanyService
  ){}

  ngOnInit(): void {
    this.companiesCount$ = this.companyService.getCompanies()
      .pipe(
       filter(c => c.length > 0),
       map(c => c.length)
      );
  }

}
