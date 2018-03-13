import { DETAIL_CHANGE } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  address: '',
  postcode: '',
  city: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DETAIL_CHANGE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
