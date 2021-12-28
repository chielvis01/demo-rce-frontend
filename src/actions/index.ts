import axios from 'axios';
import {Dispatch} from 'redux';
import { ActionTypes } from './types';

const url = 'https://mockend.com/tingzeng1208/rce-mock-backend/posts';
// const url = 'http://localhost:5001/applications';

export interface FEMAApplication {
  id: number;
  Address: string;
  State: string;
  email: string;
  ZIP: number;
  ApplicantName: string;
  status: boolean;
}

export interface FetchApplicationsAction {
  type: ActionTypes.fetchApplications;
  payload: FEMAApplication[];
}

export interface DeleteApplicationAction {
  type: ActionTypes.deleteApplications;
  payload: number;
}

export interface AddApplicationAction {
  type: ActionTypes.addOneApplications;
  payload: number;
}

export const fetchApplications = () => {
  return async (dispatch: Dispatch)=>{

      const response = await axios.get<FEMAApplication[]>(url, {
        params: {
          limit: 20
         }
      });
      dispatch<FetchApplicationsAction>({
        type: ActionTypes.fetchApplications,
        payload: response.data
      });
  };
};

export const deleteApplications = (id: number): DeleteApplicationAction =>{
  return {
    type: ActionTypes.deleteApplications,
    payload: id
  };
}

export const addAApplication = (id: number): AddApplicationAction =>{
  return {
    type: ActionTypes.addOneApplications,
    payload: id
  };
}

export type Action = FetchApplicationsAction | DeleteApplicationAction | AddApplicationAction;
export * from './types';