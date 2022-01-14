import { ApplicationInfoInterface } from "../story/ApplicationInfo";
import { render, screen, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom'
import { ViewBox } from "../story/ViewBox";
import { FEMAApplication } from "../actions";

const application: ApplicationInfoInterface = {
  "Address": "YL40B8Ngz2",
"ApplicantName": "DWrXltczwi-123",
"State": "BXSYxysDG9",
"ZIP": 43229,
"email": "lsjfbx@effrs.wx",
"id": 3,
"status": true
};

const renderViewBox = (application: FEMAApplication): RenderResult=>
  render(
    <ViewBox id ={application.id} 
        ApplicantName={application.ApplicantName} 
        Address={application.Address}  
        email = {application.email}
        State={application.State}
        ZIP = {application.ZIP}
        status= {application.status}
      />
  );

  describe("test ViewBox", ()=>{
    it("Render ViewBox with id", ()=>{
      renderViewBox(application)
      const statusDiv = screen.getByText("Status:");
      expect(statusDiv).toBeInTheDocument();
  
    });
  
    it("Render ViewBox with email info", ()=>{
      renderViewBox(application);
  
      const emailDiv = screen.getByText("Email:");
      expect(emailDiv).toBeInTheDocument();
  
    });
  })