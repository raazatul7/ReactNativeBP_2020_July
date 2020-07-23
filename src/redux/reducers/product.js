import * as types from '../actions/actionTypes';

const initialState = {
  loading: false,
  productsList: [],
  action: '',
  errMsg: '',
};

export default function product(state = initialState, action) {
  switch (action.type) {
    case types.GETPRODUCT:
      return {
        ...state,
        loading: true,
        action: action.type,
      };
    case types.GETPRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        productsList: action.payload,
        action: action.type,
      };
    case types.GETPRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        errMsg: action.payload,
        action: action.type,
      };
    default:
      return state;
  }
}
