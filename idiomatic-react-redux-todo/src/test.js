import {call, put } from 'redux-saga/effects'
import * as TYPES from '../types'

export const api = (url) => fetch(url).then(response => response.json());

export function *fetchProducts(action) {
    try{
        const Person = yield call(api, 'https://occ-admin.us.oracle.com/ccadmin/v1/Products')
        yield put({type: TYPES.FECTH_PRODUCTS_SUCCESS,
        payload: products.results});
    } catch (e) {
        yield put({type: TYPES.FECTH_PRODUCTS_FAILURE,
            payload: e})
    }
}


const gen=fetchProducts();

test("on success dispatch success action and validate Store state", () => {
   const actualProducts = {products: []};
   expect(gen.next(actualProducts).value).toEqual(put({type:FECTH_PRODUCTS_SUCCESS, payload:actualProducts.products}))
});
