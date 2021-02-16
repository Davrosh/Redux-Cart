import { call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_DISPLAY_ITEMS, receiveDisplayItems, loading, errorDisplayItems, notLoading } from "./actions";
// import { fetchData } from "./api";

const fetchData = async () => {
  const response = await fetch(
    "https://course-api.com/react-useReducer-cart-project"
  );
  const data = await response.json();
  return data;
};

// worker Saga: will be fired on REQUEST_DISPLAY_ITEMS action
function* getApiData(action) {
  try {

    // do api call
    yield put(loading());
    const data = yield call(fetchData);
    yield put(receiveDisplayItems(data));
  } catch (e) {
    yield put(errorDisplayItems());
  }
  yield put(notLoading());
}

export default function* mySaga() {
  yield takeLatest(REQUEST_DISPLAY_ITEMS, getApiData);
}
