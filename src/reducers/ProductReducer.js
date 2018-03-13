import { PRODUCT_CHOOSED, PRODUCT_UPDATE, PRICEITEM_UPDATE, PRODUCT_ADD } from '../actions/types';

const INITIAL_STATE = {
  product: null,
  products: []
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.payload);
  switch (action.type) {
    case PRODUCT_CHOOSED:
      return { ...state, product: action.payload };
    case PRODUCT_UPDATE:
      return { ...state,
          product: { ...state.product,
            [action.payload.prop]: action.payload.value
          }
        };
    case PRICEITEM_UPDATE:
      return { ...state,
        product: { ...state.product,
          [action.payload.prop]: action.payload.value,
          price: action.payload.newPrice
        }
      };
    case PRODUCT_ADD:
      return { ...state, products: [...state.products, action.payload] };
    default:
      return state;
  }
};
