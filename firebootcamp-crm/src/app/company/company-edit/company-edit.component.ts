import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Company } from '../company';

@Component({
  selector: 'fbc-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

  company = {} as Company;
  companyId: any;
  isNewCompany: boolean;
  companyForm: FormGroup;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.companyId = this.activatedRoute.snapshot.params['id'];
    this.isNewCompany = this.companyId === 'new';
    this.buildForm();

    if (!this.isNewCompany) {
      this.getCompany();
    }

    this.companyForm.get('checkPhone').valueChanges
      .subscribe(value => {
        if (value) {
          this.companyForm.get('phone').setValidators(Validators.required)
        } else {
          this.companyForm.get('phone').clearValidators();
        }
        this.companyForm.get('phone').updateValueAndValidity();
      });
  }


  getCompany(): void {
    this.companyService.getCompany(this.companyId)
      .subscribe(company => { this.companyForm.patchValue(company); });
  }


  buildForm(): void {
    this.companyForm = this.fb.group({
      name: ['', Validators.required],
      phone: [''],
      email: [''],
      checkPhone: []
    });
  }

  saveCompany(): void {
    if (this.isNewCompany) {
      this.companyService.addCompany(this.companyForm.value);
      this.router.navigate(['/company/list']);
    } else {
      const newCompany = {...this.companyForm.value, id: this.companyId };
      this.companyService.updateCompany(newCompany);
      this.router.navigate(['/company/list']);
    }
  }

}
