import * as types from './actionTypes';

export function getProduct() {
  return {
    type: types.GETPRODUCT,
  };
}
export function getProductSuccess(data) {
  return {
    type: types.GETPRODUCT_SUCCESS,
    loading: false,
    payload: data,
  };
}
export function getProductFail(error) {
  return {
    type: types.GETPRODUCT_FAILURE,
    loading: false,
    payload: error,
  };
}
