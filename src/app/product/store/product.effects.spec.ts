import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductEffects } from './product.effects';

describe('ProductEffects', () => {
  const actions$: Observable<any> = null ;
  let effects: ProductEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [
        ProductEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ProductEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
