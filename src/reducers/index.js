import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProductReducer from './ProductReducer';
import DetailsReducer from './DetailsReducer';

export default combineReducers({
  auth: AuthReducer,
  product: ProductReducer,
  details: DetailsReducer
});
