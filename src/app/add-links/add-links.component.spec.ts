import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddLinksComponent } from './add-links.component';
import { FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonService } from '../common.service';
import { ButtonComponent } from '../layout/button/button.component';
import { of } from 'rxjs';
import { Product } from '../product/store/product.model';

describe('AppComponent', () => {
  let fixture: any;
  let commonServiceMock: CommonService;
  let component;
  let template: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [
        AddLinksComponent,
        ButtonComponent
      ],
      providers: [CommonService]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AddLinksComponent);
    commonServiceMock = TestBed.inject(CommonService);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
    fixture.detectChanges();
  });
  it('should create the app', () => {
    expect(fixture).toBeTruthy();
  });

  it('should call getLinks and return list of products', fakeAsync(() => {
    const response: Product[] = [];
    spyOn(commonServiceMock, 'getLink').and.returnValue(of(response));
    component.getLinks();
    fixture.detectChanges();
    expect(component.products).toEqual(response);
  }));

  it('check form feilds', () => {
    const linkForm = {
                id:  '',
                name: '',
                description: '',
                price: '',
                quantity: ''
              };
    expect(component.linksForm.value).toEqual(linkForm);
  });
  it('should invalidate form', () => {
    component.linksForm.controls.name.setValue('');
    component.linksForm.controls.description.setValue('');
    component.linksForm.controls.price.setValue('');
    component.linksForm.controls.quantity.setValue('');

    expect(component.linksForm.valid).toBeFalsy();
  });
  it('should validate form', () => {
    component.linksForm.controls.name.setValue('Product 5');
    component.linksForm.controls.description.setValue('Short Description 5');
    component.linksForm.controls.price.setValue('200');
    component.linksForm.controls.quantity.setValue('120');
    expect(component.linksForm.valid).toBeTruthy();
  });
});
