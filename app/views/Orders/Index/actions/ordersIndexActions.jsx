/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description Redux actions. Contains sync action-creators and async actions using Redux-Thunk.
 *
 */

import { get } from '../../../../utilities/apiUtilities';

export const REQUEST_ORDERS_INDEX_ACTION = 'REQUEST_ORDERS_INDEX_ACTION';
export const RECEIVE_ORDERS_INDEX_SUCCESS = 'RECEIVE_ORDERS_INDEX_SUCCESS';
export const RECEIVE_ORDERS_INDEX_FAILURE = 'RECEIVE_ORDERS_INDEX_FAILURE';

const requestOrdersIndexAction = () => ({
  type: REQUEST_ORDERS_INDEX_ACTION,
});

const receiveOrdersIndexSuccess = (orders,pagination) => ({
  type: RECEIVE_ORDERS_INDEX_SUCCESS,
  payload: {
    orders,
    pagination,
  },
});

const receiveOrdersIndexFailure = error => ({
  type: RECEIVE_ORDERS_INDEX_FAILURE,
  payload: {
    error,
  },
});

export const performOrdersIndexSearch = (page = 1) =>
  (dispatch) => {
    dispatch(requestOrdersIndexAction());
    const path = `/orders?page=${page}`;
    get(path)
      .then((res) => {
      	const pagination = {
        	total: res.total,
					limit: res.limit,
        	page: res.page,
					pages: res.pages,
      	};

      	dispatch(receiveOrdersIndexSuccess(res.docs, pagination));
      })
      .catch((err) => {
    		dispatch(receiveOrdersIndexFailure(err));
      });
  };