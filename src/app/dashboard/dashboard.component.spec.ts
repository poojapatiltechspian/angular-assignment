import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonService } from '../common.service';
import { DashboardComponent } from './dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { of } from 'rxjs';
export class Books {
  id: string;
  name: string;
  displayName: string;
  author: string;
  price: string;
  description: string;
  imgPath: string;
}
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let commonServiceMock: CommonService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule],
      declarations: [ DashboardComponent, DashboardCardComponent],
      providers: [CommonService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    commonServiceMock = TestBed.inject(CommonService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should call getBooks and return list of Books', fakeAsync(() => {
    const response: Books[] = [];
    spyOn(commonServiceMock, 'getBooks').and.returnValue(of(response));
    component.getBooksData();
    fixture.detectChanges();
    expect(component.bookData).toEqual(response);
  }));
});
