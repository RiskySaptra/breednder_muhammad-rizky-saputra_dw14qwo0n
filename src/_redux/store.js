// import { createStore, combineReducers, applyMiddleware } from "redux";

// import species from "../_reducers/species";
// import { logger, promise } from "../middleware";

// // Global state
// const rootReducers = combineReducers({
//   species
// });

// // Setup store for Redux
// const store = createStore(rootReducers, applyMiddleware(logger, promise));

// export default store;
import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import logger from "redux-logger";
import auth from "../_reducers/auth";
import species from "../_reducers/species";
import pet from "../_reducers/pet";

// Global state
const reducers = combineReducers({ auth, species, pet });

// Setup store for Redux
const store = createStore(reducers, applyMiddleware(promise, logger));

export default store;
