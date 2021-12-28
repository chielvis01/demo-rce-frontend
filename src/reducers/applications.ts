
import { FEMAApplication, FetchApplicationsAction, Action, AddApplicationAction } from '../actions/index';
import { ActionTypes } from '../actions/types';

export const applicationReducers = (state: FEMAApplication[] = [], action: Action) => {

  switch (action.type){
    case ActionTypes.fetchApplications:
      return action.payload;
    case ActionTypes.deleteApplications:
      if (action.payload===-1){
        return state.filter((todo: FEMAApplication) => todo.id !== action.payload || todo.id === action.payload);
      }
      else{
      return state.filter((todo: FEMAApplication) => todo.id !== action.payload);
      }
    // case ActionTypes.addOneApplications:  
    //   if (action.payload === -1){
    //     return state.filter((todo: FEMAApplication) => todo.id !== action.payload || todo.id === action.payload);
    //   }else{
    //     return action.payload;
    //   }
    default:
      return state;
  }
};