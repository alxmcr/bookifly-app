import { createStore } from "redux";
import { WindowWithDevTools } from "../@types/appReduxTypes";
import { rootReducer } from "./reducers";

const isReduxDevtoolsExtensionExist =
    (arg: Window | WindowWithDevTools):
        arg is WindowWithDevTools => {
        return '__REDUX_DEVTOOLS_EXTENSION__' in arg;
    }

export const appReduxStore = createStore(rootReducer,
    isReduxDevtoolsExtensionExist(window) ?
        window.__REDUX_DEVTOOLS_EXTENSION__() : undefined)
