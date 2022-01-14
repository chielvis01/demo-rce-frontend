import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Formbox } from "../story/FormView";


describe("test form box", ()=>{

  it("test applicant name input", ()=>{ 
    
    const onSubmit = jest.fn();
    render(<Formbox onSubmit={onSubmit} children=''/>);   
    const applicantNameInput = screen.getByPlaceholderText(/Applicant name/i);
    expect(applicantNameInput).toBeInTheDocument();
  });

  it("test status checkbox", ()=>{    
    
    const onSubmit = jest.fn();
    render(<Formbox onSubmit={onSubmit} children=''/>);
    const checkboxInput = screen.getByTitle('abc');
    expect(checkboxInput).toBeInTheDocument();
  });

  it("submit button would fire", ()=>{    
    
    const onSubmit = jest.fn((e)=>e.preventDefault());
    render(<Formbox onSubmit={onSubmit} children=''/>);
    window.HTMLFormElement.prototype.submit = () => {};
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);
    expect(onSubmit).toBeCalledTimes(1);
  });

})
