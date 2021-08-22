import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import userFavoritesReducer from "./reducers/favorites";
import userReducer from "./reducers/users-reducer";
import videoReducer from "./reducers/videos";

let reducer = combineReducers({
    favorites: userFavoritesReducer,
    user: userReducer,
    videos: videoReducer
})

let store = createStore(reducer, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;