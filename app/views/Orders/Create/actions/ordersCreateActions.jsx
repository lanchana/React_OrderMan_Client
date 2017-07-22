/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description Redux actions. Contains sync action-creators and async actions using Redux-Thunk.
 *
 */

import { post } from '../../../../utilities/apiUtilities';
import { history } from '../../../Routes';

export const REQUEST_ORDERS_CREATE_ACTION = 'REQUEST_ORDERS_CREATE_ACTION';
export const RECEIVE_ORDERS_CREATE_SUCCESS = 'REQUEST_ORDERS_CREATE_SUCCESS';
export const RECEIVE_ORDERS_CREATE_FAILURE = 'REQUEST_ORDERS_CREATE_FAILURE';

const requestOrdersCreateAction = () => ({
    type: REQUEST_ORDERS_CREATE_ACTION,
});

const receiveOrdersCreateSuccess = () => ({
    type: RECEIVE_ORDERS_CREATE_SUCCESS,
});

const receiveOrdersCreateFailure = error => ({
    type: RECEIVE_ORDERS_CREATE_FAILURE,
    payload: {
        error,
    },
});

export const performOrdersCreate = order => (dispatch) => {
    dispatch(requestOrdersCreateAction());
    post('/orders', order)
        .then((response) => {
            dispatch(receiveOrdersCreateSuccess());
            history.push('/orders');
        })
        .catch((error) => {
            dispatch(receiveOrdersCreateFailure(error));
        });
};
