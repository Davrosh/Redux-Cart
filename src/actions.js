export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const REMOVE = "REMOVE";
export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTALS = "GET_TOTALS";
export const TOGGLE_AMOUNT = "TOGGLE_AMOUNT";

export const LOADING = "LOADING";
export const NOT_LOADING = "NOT_LOADING"

export const REQUEST_DISPLAY_ITEMS = "REQUEST_DISPLAY_ITEMS";
export const RECEIVE_DISPLAY_ITEMS = "RECEIVE_DISPLAY_ITEMS";
export const ERROR_DISPLAY_ITEMS = "ERROR_DISPLAY_ITEMS"

// action invokers
export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}

export const removeItem = id => {
    return {
        type: REMOVE,
        payload: {id}
    }
}

export const toggleAmount = (id, toggle) => {
    return {
        type: TOGGLE_AMOUNT,
        payload: {id, toggle}
    }
}

export const getTotals = () => {
    return {
        type: GET_TOTALS
    }
}

export const loading = () => {
    return {
        type: LOADING
    }
}

export const notLoading = () => {
    return {
        type: NOT_LOADING
    }
}

export const requestDisplayItems = () => {
    return {
        type: REQUEST_DISPLAY_ITEMS
    }
}

export const receiveDisplayItems = cart => {
    return {
        type: RECEIVE_DISPLAY_ITEMS,
        payload: {cart}
    }
}

export const errorDisplayItems = () => {
    return {
        type: ERROR_DISPLAY_ITEMS
    }
}

