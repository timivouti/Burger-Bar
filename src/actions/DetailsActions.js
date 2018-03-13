import { DETAIL_CHANGE } from './types';

export const onDetailsChange = ({ prop, value }) => {
  return {
    type: DETAIL_CHANGE,
    payload: { prop, value }
  };
};
