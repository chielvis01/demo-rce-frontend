import React from 'react';
import { connect} from 'react-redux';
import {FEMAApplication, fetchTodos, deleteTodos } from '../actions';
import {StoreState } from '../reducers';


interface AppProps {
  todos: FEMAApplication[];
  fetchTodos: Function;
  deleteTodos: typeof deleteTodos;
}

class _App extends React.Component<AppProps>{

  state = {showing: false};

  buttonClick= (): void => {
    this.props.fetchTodos();
  }

  onDeleteClick = (id: number): void =>{

    this.props.deleteTodos(id);
  }

  addNewApp = () : void =>{

  }

  newClick = (): void =>{

    const {showing} = this.state;
    this.setState({ showing: !showing });
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todos: FEMAApplication) =>

    {
      return <tr><td>{todos.ApplicantName} </td><td>{todos.status? "Active": "Inactive"}</td><td><button onClick={()=>this.onDeleteClick(todos.id)}>del</button></td> </tr>;
    });
  }

  // handleSubmit = event => {
  //   if (value) {
  //     setList(list.concat(value));
  //   }

  //   setValue('');

  //   event.preventDefault();
  // };


  
  render() {
      console.log(this.props.todos);
      const {showing} = this.state;
      return <div><button onClick={this.buttonClick}>Get list</button>&nbsp;&nbsp;<button onClick={this.newClick}>New</button>
      <div style={{ display: (showing ? 'block' : 'none') }}>
        {/* <form> */}
        {/* <form  onSubmit={(e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value; // typechecks!
    const password = target.password.value; // typechecks!
    // etc...
  }}> */}
        <table>
          <tr><td>Applicant name</td><td><input type='text' name='appName'></input></td></tr>
          <tr><td>Status</td><td><input type='checkbox' name='status'></input></td></tr>
          <tr><td><button onClick={this.addNewApp}>Submit</button></td></tr>
        </table>
        {/* </form> */}
      </div>
      <table>
        <tr><td>Applicant Name</td><td>Status</td><td>Action</td></tr>
      {this.renderList()}
      </table>
      </div>
      ;
  }
}


const mapStateToProps = (state: StoreState) => {
  return {todos: state.todos};
}

export const App = connect(
  mapStateToProps, 
  {fetchTodos, deleteTodos}
)(_App);