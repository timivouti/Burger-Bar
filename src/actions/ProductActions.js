import { Actions } from 'react-native-router-flux';
import { PRODUCT_CHOOSED, PRODUCT_UPDATE, PRICEITEM_UPDATE, PRODUCT_ADD } from './types';

export const productChoosed = (product) => {
  Actions.productChooser();
  return {
    type: PRODUCT_CHOOSED,
    payload: product
  };
};

export const productUpdate = ({ prop, value }) => {
  return {
    type: PRODUCT_UPDATE,
    payload: { prop, value }
  };
};

export const priceItemUpdate = ({ prop, value, price }) => {
  if (value) {
    const newPrice = price + 1;
    return {
      type: PRICEITEM_UPDATE,
      payload: { prop, value, newPrice }
    };
  }
  const newPrice = price - 1;
  return {
    type: PRICEITEM_UPDATE,
    payload: { prop, value, newPrice }
  };
};

export const addProduct = (product) => {
  Actions.pop();
  return {
    type: PRODUCT_ADD,
    payload: product
  };
};
