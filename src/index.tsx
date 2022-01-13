
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {App} from './components/App';
import {reducers} from './reducers';
import {store} from './components/store';


ReactDom.render(
    <Provider store={store}><App /></Provider>, 
    document.getElementById('root') );