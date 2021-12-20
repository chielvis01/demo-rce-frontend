import axios from 'axios';
import {Dispatch} from 'redux';
import {ActionTypes} from './types';

const url = 'https://mockend.com/tingzeng1208/rce-mock-backend/posts';

export interface FEMAApplication {
  id: number;
  Address: string;
  State: string;
  email: string;
  zip: number;
  ApplicantName: string;
  status: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchApplications;
  payload: FEMAApplication[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodos;
  payload: number;
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch)=>{

      const response = await axios.get<FEMAApplication[]>(url);
      dispatch<FetchTodosAction>({
        type: ActionTypes.fetchApplications,
        payload: response.data
      });
  };
};

export const deleteTodos = (id: number): DeleteTodoAction =>{
  return {
    type: ActionTypes.deleteTodos,
    payload: id
  };
}


export * from './types';