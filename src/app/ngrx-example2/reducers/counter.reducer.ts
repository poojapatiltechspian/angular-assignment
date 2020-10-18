import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.actions';

export const initialState = 0;

const counterReducerr = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function counterReducer(state, action): any {
  return counterReducerr(state, action);
}
