import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
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
  constructor(
    private commonService: CommonService,
    private fb: FormBuilder,
    ) {}

  ngOnInit(){
    this.createForm();
    this.getLinks();
  }
  createForm(){
    this.linksForm = this.fb.group({
      id:  [''],
      name: ['', Validators.required],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      quantity:['', [Validators.required]],
    });
  }
  patchForm(data?: any){
    this.linksForm = this.fb.group({
      id:  [''|| data.id],
      name: [''|| data.name, Validators.required],
      description: ['' || data.description, [Validators.required]],
      price: [''|| data.price, [Validators.required]],
      quantity: [''|| data.quantity, [Validators.required]]
    });
  }
    delete(id) {
      this.commonService.deleteLink(id).subscribe((data)=>{
        this.getLinks();
      })
    }
    getLinks() {
      this.commonService.getLink().subscribe((data)=>{
        this.products= data;
      })
    }
    onSubmit(data){
      this.commonService.createLink(data.value).subscribe((data)=>{
        this.getLinks();
        this.linksForm.reset();
      })
    }
    edit(id) {
      this.commonService.getLinkData(id).subscribe((data)=>{
        this.patchForm(data);
        this.isEdit = true;
      })
    }
    editData(){
      this.commonService.updateLink(this.linksForm.value.id, this.linksForm.value).subscribe((data)=>{
        this.getLinks();
        this.linksForm.reset();
        this.isEdit = false;
      })
  }
}

