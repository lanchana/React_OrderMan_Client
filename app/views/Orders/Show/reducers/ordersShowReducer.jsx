/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description Redux reducer "ordersShow".
 *
 * @description This reducer is solely responsible for maintaining info about a single Order.
 *
 *
 * initialState = {
 *   isFetching: false,
 *   order: {},
 *   error: null,
 * };
 *
 */

import {
  REQUEST_ORDER_SHOW_ACTION,
  RECEIVE_ORDER_SHOW_SUCCESS,
  RECEIVE_ORDER_SHOW_FAILURE,
} from "../actions/ordersShowActions";

export const initialState = {
  isFetching: false,
  order: {},
  error: null,
};

export default (reduxState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_ORDER_SHOW_ACTION:
      return {
        ...reduxState,
        isFetching: true,
        error: null,
      };
    case RECEIVE_ORDER_SHOW_SUCCESS:
      return {
        ...reduxState,
        isFetching: false,
        order: payload.order,
      };
    case RECEIVE_ORDER_SHOW_FAILURE:
      return {
        ...reduxState,
        isFetching: false,
        error: payload.error,
      };
    default:
      return reduxState;
  }
};