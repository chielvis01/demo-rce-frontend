import { combineReducers} from 'redux';
import { applicationReducers } from './applications';
import { FEMAApplication } from  '../actions';


export interface StoreState {
  applications: FEMAApplication[]
}

export const reducers = combineReducers<StoreState> (
  {applications: applicationReducers}
  
);
