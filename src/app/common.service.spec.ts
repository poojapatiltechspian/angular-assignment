import { CommonService } from './common.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandlingService } from './shared/services/error-handling.service';

describe('CommonService', () => {
  let service: CommonService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [CommonService, ErrorHandlingService]
    });
  });
  beforeEach(() => {
    service = TestBed.inject(CommonService);
    http = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test http client get for produts', () => {
    const saveData =  {
          id: '1',
          name: 'tech',
          description: 5,
          price: 'short description 5',
          quantity: 'link 5',
        };

    service.getLink().subscribe((post) => {
      expect(saveData).toBe(post);
    });
    const req = http.expectOne('http://localhost:3000/products/');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(saveData);
  });

  it('should be add product data and return added data', () => {
    const saveData =  {
      category_tag: 'tech',
      id: 6,
      short_description: 'short description 6',
      title: 'link 6',
    };
    service.createLink(saveData).subscribe((addedPost) => {
      expect(addedPost).toBe(saveData);
    });
    const req = http.expectOne('http://localhost:3000/products/');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(saveData);
  });

  it('should be edit product data and return edit data', () => {
    const id = '1';
    const saveData =  {
      category_tag: 'tech',
      id: 1,
      short_description: 'short description 6',
      title: 'link 6',
    };
    service.updateLink(id, saveData).subscribe((addedPost) => {
      expect(addedPost).toBe(saveData);
    });
    const req = http.expectOne('http://localhost:3000/products/1');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(saveData);
  });

  // it('should test 404 error', () => {
  //   const errorMsg = 'mock 404 error occour';
  //   service.getLinkError().subscribe((data) => {
  //     fail('failing with error 404');
  //     },
  //     (err: HttpErrorResponse) => {
  //       expect(err.status).toEqual(404);
  //       expect(err.error).toEqual(errorMsg);
  //     }
  //   );
  //   const req = http.expectOne('http://localhost:3000/productss/');
  //   req.flush(errorMsg, {status: 404, statusText: 'Not Found'});
  // });
});
