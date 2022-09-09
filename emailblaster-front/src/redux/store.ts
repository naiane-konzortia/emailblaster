import { createStore, applyMiddleware, compose, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import rootSaga from "./sagas";

import { EmailActionTypes } from "./email/types";
import { PagesState } from "./pages/types";


const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export interface ApplicationState {

  EmailSent: EmailActionTypes;
  Pages: PagesState;

}

function configureStore(
  initialState: ApplicationState
): Store<ApplicationState> {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSaga);
  return store as unknown as Store<ApplicationState>;
}

export const store: Store<ApplicationState> = configureStore(
  {} as ApplicationState
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
