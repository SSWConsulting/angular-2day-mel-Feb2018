import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Company } from '../company';
import { Subscription } from 'rxjs/Subscription';
import { takeWhile } from 'rxjs/operators/takeWhile';

@Component({
  selector: 'fbc-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss']
})
export class CompanyTableComponent implements OnInit, OnDestroy {


  @Input()
  companies$: Observable<Company[]>;


  constructor() { }

  ngOnInit() {

  }

  ngOnDestroy(): void {
  }

  deleteCompany(toDelete: Company)
  {
    console.error('DELETE no implemented');
  }



}
