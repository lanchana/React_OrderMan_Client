/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description Redux actions. Contains sync action-creators and async actions using Redux-Thunk.
 *
 */

import { get, patch } from '../../../../utilities/apiUtilities';

export const REQUEST_ORDER_SHOW_ACTION = 'REQUEST_ORDER_SHOW_ACTION';
export const RECEIVE_ORDER_SHOW_SUCCESS = 'REQUEST_ORDER_SHOw_SUCCESS';
export const RECEIVE_ORDER_SHOW_FAILURE = 'REQUEST_ORDER_SHOw_FAILURE';

const requestOrderShowAction = () => ({
  type: REQUEST_ORDER_SHOW_ACTION,
});

const receiveOrderShowSuccess = (order) => ({
  type: RECEIVE_ORDER_SHOW_SUCCESS,
  payload: {
    order,
  },
});

const receiveOrderShowFailure = error => ({
  type: RECEIVE_ORDER_SHOW_FAILURE,
  payload: {
    error,
  },
});

export const performRetrieveOrder = id =>
  (dispatch) => {
  dispatch(requestOrderShowAction());
  get(`/orders/${id}`)
    .then((res) => {
      dispatch(receiveOrderShowSuccess(res.order));
    })
    .catch((err) => {
    dispatch(receiveOrderShowFailure(err));
    });
  };

export const performUpdateOrder = (id, updates) =>
  (dispatch) => {
  dispatch(requestOrderShowAction());
  patch(`/orders/${id}`, updates)
    .then((res) => {
    dispatch(receiveOrderShowSuccess(res.order));
    })
    .catch((err) => {
    dispatch(receiveOrderShowFailure(err));
    });
  };

