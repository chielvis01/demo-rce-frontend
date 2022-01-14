
import { FEMAApplication, FetchApplicationsAction, Action } from '../actions/index';
import { ActionTypes } from '../actions';

export const applicationReducers = (state: FEMAApplication[] = [], action: Action) => {

  switch (action.type){
    case ActionTypes.fetchApplications:
      return action.payload;
    case ActionTypes.deleteApplications:
      // if (action.payload===-1){
      //   return state.filter((todo: FEMAApplication) => todo.id !== action.payload || todo.id === action.payload);
      // }
      // else{
      // return state.filter((todo: FEMAApplication) => todo.id !== action.payload);
      // }
      return state.filter((todo: FEMAApplication) => todo.id !== action.payload);
      // let foundApplication: FEMAApplication | undefined = state.find(a=>a.id === action.payload);
      //   if (foundApplication){
      //     const index = state.indexOf(foundApplication);
      //     state = state.splice(index, 1);
      //   }
      //   return state;
    case ActionTypes.addOneApplications:
      state.push(action.payload);
      return state;
    case ActionTypes.editOneApplication:
      if (action.payload.id){
        let foundApplication: FEMAApplication | undefined = state.find(a=>a.id === action.payload.id);
        if (foundApplication){
          foundApplication.ApplicantName = action.payload.ApplicantName;
          foundApplication.status = action.payload.status;
        }
      }
      return state;
    default:
      return state;
  }
};