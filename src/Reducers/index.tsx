import { AnyAction, Reducer } from 'redux';
import IS_ADDING_HISTORY from './actions';

const defaultState = {
  data: [],
  loading: false,
  error: null,
};

const reducer: Reducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case IS_ADDING_HISTORY:
      return {
        ...state,
        data: [action.payload, ...state.data],
      };
    default:
      return state;
  }
};

export default reducer;
