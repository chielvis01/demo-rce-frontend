
import { deleteApplications, addAApplication, FEMAApplication, editAApplication} from '../actions';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import {reducers, StoreState} from '../reducers';

const store = createStore(reducers, applyMiddleware(thunk));
let state = store.getState().applications;
let applicantName : string = "Test applicant name";

const findId = 3;
const application: FEMAApplication = {
  "Address": "YL40B8Ngz2",
"ApplicantName": applicantName,
"State": "BXSYxysDG9",
"ZIP": 43229,
"email": "lsjfbx@effrs.wx",
"id": findId,
"status": true
};

describe('Test store operations', () => {

  it("Initial store has empty applications", ()=>{
    
    expect(state).toHaveLength(0);
  });

  it("add an application", ()=>{
    
    store.dispatch(addAApplication(application));
    expect(state).toHaveLength(1);
  });

  it("search an application", ()=>{
    const findApplication = state.find((application) => application.id === 3);
    expect(findApplication?.ApplicantName).toEqual(applicantName);
  })

  it("edit an application", ()=>{
    
    let findApplication: FEMAApplication | undefined = state.find((application) => application.id === findId);
    
    const changeName = "Name is Changed";
    if (findApplication){
        findApplication.ApplicantName = changeName;
        store.dispatch(editAApplication(findApplication));
        const revisedApplication = state.find(a=>a.id === findId);
        expect(revisedApplication?.ApplicantName).toEqual(changeName);

    }   

  });

  it("delete an application", ()=>{
    store.dispatch(deleteApplications(findId));
    const state = store.getState().applications;
    expect(state).toHaveLength(0);
  })
  
  
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
