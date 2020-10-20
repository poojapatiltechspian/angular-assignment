import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-links',
  templateUrl: './add-links.component.html',
  styleUrls: ['./add-links.component.scss']
})
export class AddLinksComponent implements OnInit {

  products: any;
  selectedProduct: any;
  linksForm: FormGroup;
  isEdit: boolean;
  userStatus: any;
  buttonLable: any;
  buttonEdit = 'Edit';
  buttonDelete = 'delete';
  sub: Subscription;
  constructor(
    private commonService: CommonService,
    private fb: FormBuilder,
    ) {}

  ngOnInit(): void{
    this.createForm();
    this.getLinks();
  }
  createForm(): void{
    this.buttonLable = 'save';
    this.linksForm = this.fb.group({
      id:  [''],
      name: ['', Validators.required],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
    });
  }
  patchForm(data?: any): void{
    this.linksForm = this.fb.group({
      id:  ['' || data.id],
      name: ['' || data.name, Validators.required],
      description: ['' || data.description, [Validators.required]],
      price: ['' || data.price, [Validators.required]],
      quantity: ['' || data.quantity, [Validators.required]]
    });
  }
    delete(id): void {
      this.commonService.deleteLink(id).subscribe((data) => {
        this.getLinks();
      });
    }
    getLinks(): void {
      this.sub = this.commonService.getLink().subscribe(
        (data) => { this.products = data; },
        (error) =>  { console.log('HTTP Error', error); }
      );
    }
    onSubmit(data): void{
      this.commonService.createLink(data.value).subscribe(() => {
        this.getLinks();
        this.linksForm.reset();
      });
    }
    edit(id): void {
      this.buttonLable =  'Edit';
      this.commonService.getLinkData(id).subscribe((data) => {
        this.patchForm(data);
        this.isEdit = true;
      });
    }
    editData(): void{
      this.commonService.updateLink(this.linksForm.value.id, this.linksForm.value).subscribe((data) => {
        this.getLinks();
        this.linksForm.reset();
        this.isEdit = false;
        this.buttonLable =  'SAVE';
      });
  }
}

