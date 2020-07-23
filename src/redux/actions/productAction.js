import {getProduct, getProductSuccess, getProductFail} from './index';
import {getApi} from '../../common/Api';

export function fetchProduct() {
  return async (dispatch) => {
    dispatch(getProduct);
    getApi(GLOBAL.DUMMYAPI)
      .then((res) => {
        dispatch(getProductSuccess(res.data.products));
      })
      .catch((error) => {
        dispatch(getProductFail(error));
      });
  };
}
