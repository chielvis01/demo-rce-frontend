
import { fetchApplications, deleteApplications, addAApplication, FEMAApplication} from '../actions';
import React from 'react';
import { render, screen, RenderResult, fireEvent } from '@testing-library/react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {App} from '../components/App';
import {reducers} from '../reducers';

const store = createStore(reducers, applyMiddleware(thunk));
let state = store.getState().applications;
let applicantName : string = "Test applicant name";
describe('Test store operations', () => {

  it("Initial store has empty applications", ()=>{
    
    expect(state).toHaveLength(0);
  });

  it("add an application", ()=>{
    const application: FEMAApplication = {
      "Address": "YL40B8Ngz2",
    "ApplicantName": applicantName,
    "State": "BXSYxysDG9",
    "ZIP": 43229,
    "email": "lsjfbx@effrs.wx",
    "id": 3,
    "status": true
    };
    store.dispatch(addAApplication(application));
    expect(state).toHaveLength(1);
  });

  it("search an application", ()=>{
    const findApplication = state.find((application) => application.id === 3);
    expect(findApplication?.ApplicantName).toEqual(applicantName);
  })

  it("edit an application", ()=>{

  });
  
  // const unchangedBook = state.applicationList.find((book) => book.id === '1');
  // expect(unchangedBook?.title).toBe('1984');
  // expect(unchangedBook?.author).toBe('George Orwell');

  // store.dispatch(updateBook({ id: '1', title: '1985', author: 'George Bush' }));
  // state = store.getState().book;
  // let changeBook = state.applicationList.find((book) => book.id === '1');
  // expect(changeBook?.title).toBe('1985');
  // expect(changeBook?.author).toBe('George Bush');

  // store.dispatch(
  //   updateBook({ id: '1', title: '1984', author: 'George Orwell' })
  // );
  // state = store.getState().book;
  // const backToUnchangedBook = state.applicationList.find((book) => book.id === '1');

  // expect(backToUnchangedBook).toEqual(unchangedBook);
});

// test('Deletes a book from list with id', () => {
//   let state = store.getState().book;
//   const initialBookCount = state.applicationList.length;

//   store.dispatch(deleteBook({ id: '1' }));
//   state = store.getState().book;

//   expect(state.applicationList.length).toBeLessThan(initialBookCount); // Checking if new length smaller than inital length, which is 3

//   // expect(backToUnchangedBook).toEqual(unchangedBook);
// });

// test('Adds a new book', () => {
//   let state = store.getState().book;
//   const initialBookCount = state.applicationList.length;

//   store.dispatch(
//     addNewBook({ id: '4', author: 'Tester', title: 'Testers manual' })
//   );
//   state = store.getState().book;
//   const newlyAddedBook = state.applicationList.find((book) => book.id === '4');
//   expect(newlyAddedBook?.author).toBe('Tester');
//   expect(newlyAddedBook?.title).toBe('Testers manual');
//   expect(state.applicationList.length).toBeGreaterThan(initialBookCount);
// });
