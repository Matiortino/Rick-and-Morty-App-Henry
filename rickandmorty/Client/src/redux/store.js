import {createStore, applyMiddleware, compose} from "redux";
import {thunk} from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
//esto siempre va ir a asi, de principio copiarlo para el resto de proyectos hasta aprenderlo
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk)),
);

export default store