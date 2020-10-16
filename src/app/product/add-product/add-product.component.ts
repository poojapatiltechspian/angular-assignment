import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductState } from '../store/product.reducer';
import { select, Store } from '@ngrx/store';
import { addProduct, loadProduct, loadProducts, updateProduct } from '../store/product.actions';
import { selectProduct, selectedProduct } from '../store/product.selecters';
import { Observable } from 'rxjs';
import { Product } from '../store/product.model';
import { Update } from '@ngrx/entity';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  products$: Observable<Product[]>;
  selectedProduct: any;
  linksForm: FormGroup;
  isEdit: boolean;
  userStatus: any;
  constructor(
    private fb: FormBuilder,
    private store: Store<ProductState>,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
      if (this.activatedRoute.snapshot.url[0].path === 'edit-product') {
        this.edit();
      }
    }

  ngOnInit(): void{
    this.createForm();
  }
  createForm(): void{
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

  onSubmit(data): void{
    this.store.dispatch(addProduct({product: data.value}));
    this.linksForm.reset();
    this.router.navigate(['./product-list']);
  }
  edit(): void {
    this.isEdit = true;
    const id = this.activatedRoute.snapshot.params['id'];
    this.store.dispatch(loadProduct({id: id}));
    this.store.pipe(select(selectedProduct)).subscribe((product) => {
      this.selectedProduct = Object.assign(new Product(), product);
      this.patchForm(this.selectedProduct);
    });
  }
  editData(): void{
    this.linksForm.value.id = this.activatedRoute.snapshot.params['id'];
    const uppdate: Update<Product> = {
      id: this.linksForm.value.id,
      changes: this.linksForm.value
    };
    this.store.dispatch(updateProduct({product: uppdate}));
    this.linksForm.reset();
    this.isEdit = false;
    this.router.navigate(['./product-list']);
  }

}
