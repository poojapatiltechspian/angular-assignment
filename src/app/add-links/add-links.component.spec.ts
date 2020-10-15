import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddLinksComponent } from './add-links.component';
import { FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonService } from '../common.service';
// describe('AppComponent', () => {
//     let fixture: AddLinksComponent;
//     let commonServiceMock: any;
//     let fbMock: FormBuilder;
//     let routerMock: any;
//     beforeEach(()=> {
//       commonServiceMock = {getLink: jest.fn}
//       fbMock = new FormBuilder();
//       routerMock = jest.fn();
//       fixture = new AddLinksComponent(
//         commonServiceMock,
//         fbMock,
//       );
//       fixture.ngOnInit();
//     });
//     describe('test: ngOnInit',()=>{
//        it('should create the app', () => {
//         const linkForm = {
//           id:  '',
//           title: '',
//           short_description: '',
//           category_tag: ''
//         };
//         expect(fixture.linksForm.value).toEqual(linkForm);
//         }); 
//     })

// })

describe('AppComponent', () => {
  let fixture: any;
  let commonServiceMock: any;
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
        AddLinksComponent
      ],
      providers:[CommonService]
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
  // xit('access html element', () => {
  //   expect(fixture).toBeTruthy();
  //   const compiled= fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.add-link').textContent).toContain('Add Link');
  // });
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
    component.linksForm.controls.description.setValue('')
    component.linksForm.controls.price.setValue('')
    component.linksForm.controls.quantity.setValue('')

    expect(component.linksForm.valid).toBeFalsy();
  });
  it('should validate form', () => {
    component.linksForm.controls.name.setValue('Product 5');
    component.linksForm.controls.description.setValue('Short Description 5')
    component.linksForm.controls.price.setValue('200')
    component.linksForm.controls.quantity.setValue('120')
    expect(component.linksForm.valid).toBeTruthy();
  });

});
