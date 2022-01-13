import axios from 'axios';
import {Dispatch} from 'redux';
import { ActionTypes } from './types';
import { url } from '../components/ApiSync';

// const url = 'https://mockend.com/tingzeng1208/rce-mock-backend/posts';



export interface FEMAApplication {
  id?: number;
  Address?: string;
  State?: string;
  email?: string;
  ZIP?: number;
  ApplicantName?: string;
  status?: boolean;
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
  payload: FEMAApplication;
}

export interface EditApplicationAction {
  type: ActionTypes.editOneApplication;
  payload: FEMAApplication;
}

export const fetchApplications = (fetchurl:string) => {
  return async (dispatch: Dispatch)=>{

      const response = await axios.get<FEMAApplication[]>(fetchurl, {
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

export const addAApplication = (application: FEMAApplication): AddApplicationAction =>{
  return {
    type: ActionTypes.addOneApplications,
    payload: application
  };
}

export const editAApplication = (application: FEMAApplication): EditApplicationAction =>{
  return {
    type: ActionTypes.editOneApplication,
    payload: application
  };
}

export type Action = FetchApplicationsAction | DeleteApplicationAction | AddApplicationAction | EditApplicationAction;
export * from './types';