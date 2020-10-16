import { Action } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';
import * as TutorialActions from '../actions/tutorials.actions';

const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'http://google.com'
};

export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions): any {
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
        case TutorialActions.REMOVE_TUTORIAL:
            state = state.filter((data, pos) => pos !== action.payload );
            return state;
        default:
            return state;
    }
}
