/**
 * Created by kurosaki on 2018/4/20.
 */
import { createStore } from 'redux'
import themeReducer from '../reducer/reducer';

let store = createStore(themeReducer);

export default store