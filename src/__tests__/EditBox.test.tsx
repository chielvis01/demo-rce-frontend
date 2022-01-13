import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { EditForm } from "../story/EditBox";
import { FEMAApplication } from "../actions";


const application: FEMAApplication = {
  "Address": "YL40B8Ngz2",
"ApplicantName": "DWrXltczwi-123",
"State": "BXSYxysDG9",
"ZIP": 43229,
"email": "lsjfbx@effrs.wx",
"id": 3,
"status": true
};

describe("test Edit Form", ()=>{

  it("test applicant name input", ()=>{ 
    
    const onSubmit = jest.fn();
    render(<EditForm 
      ApplicantName={application.ApplicantName} 
      Address={application.Address}  
      email = {application.email}
      State={application.State}
      ZIP = {application.ZIP}
      status= {application.status}
      onSubmit={onSubmit} 
      onStatusChange={()=>{}}
      onAppNameChange={()=>{}}
      children=''/>);   
    const applicantNameInput = screen.getByPlaceholderText(/Applicant name/i);
    expect(applicantNameInput).toBeInTheDocument();
  });

  it("test status checkbox", ()=>{    
    
    const onSubmit = jest.fn();
    render(<EditForm 
      ApplicantName={application.ApplicantName} 
      Address={application.Address}  
      email = {application.email}
      State={application.State}
      ZIP = {application.ZIP}
      status= {application.status}
      onSubmit={onSubmit} 
      onStatusChange={()=>{}}
      onAppNameChange={()=>{}}
      children=''/>);
    const checkboxInput = screen.getByTitle('abc');
    expect(checkboxInput).toBeInTheDocument();
  });

  it("submit button would fire", ()=>{    
    
    const onSubmit = jest.fn((e)=>e.preventDefault());
    render(<EditForm 
      ApplicantName={application.ApplicantName} 
      Address={application.Address}  
      email = {application.email}
      State={application.State}
      ZIP = {application.ZIP}
      status= {application.status}
      onSubmit={onSubmit} 
      onStatusChange={()=>{}}
      onAppNameChange={()=>{}}
      children=''/>);
    window.HTMLFormElement.prototype.submit = () => {};
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);
    expect(onSubmit).toBeCalledTimes(1);
    fireEvent.click(submitButton);
    expect(onSubmit).toBeCalledTimes(2);
  });

})
