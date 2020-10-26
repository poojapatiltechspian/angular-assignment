import { reducer, initialState } from './product.reducer';
import * as fromProducts from './product.reducer';
import * as fromActions from './product.actions';
describe('Product Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const { initialState } = fromProducts;
      const action = {} as any;
      const state = fromProducts.reducer(undefined, action);

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });

  });
});
