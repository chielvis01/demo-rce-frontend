
import { fetchApplications, deleteApplications} from '../actions';
import React from 'react';
import { render, screen, RenderResult, fireEvent } from '@testing-library/react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {App} from '../components/App';
import {reducers} from '../reducers';

const store = createStore(reducers, applyMiddleware(thunk));

describe('Test store operations', () => {

  it("Initial store has empty applications", ()=>{
    let state = store.getState().applications;
    expect(state).toHaveLength(0);
  });

  it("add an application", ()=>{
    let state = store.getState().applications;
    expect(state).toHaveLength(0);
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
