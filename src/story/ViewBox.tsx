import {FEMAApplication} from '../actions';
import { GridContainer, Grid } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css';
import '@trussworks/react-uswds/lib/index.css';
import CSS from 'csstype';

const div1style : CSS.Properties  = {
  width: '600',
  display: 'inline-block',
  marginTop: '50px',
  height: 'auto'
};

const leftGridSize = 8;

const rightGridSize = 4;

export const ViewBox = ({id,
  Address,
  State,
  email,
  ZIP,
  ApplicantName,
  status}: FEMAApplication): React.ReactElement=>{
  return <div style={div1style}>
  <GridContainer containerSize="mobile">
    <Grid row>
      <Grid col={leftGridSize}>Id: </Grid>
      <Grid col={rightGridSize}>{id}</Grid>
    </Grid>
    <Grid row>
      <Grid col={leftGridSize}>Applicant Name:</Grid>
      <Grid col={rightGridSize}>{ApplicantName}</Grid>
    </Grid>
    <Grid row>
      <Grid col={leftGridSize}>Status:</Grid>
      <Grid col={rightGridSize}>{status? 'Active' : 'Inactive'}</Grid>
    </Grid>
    <Grid row>
      <Grid col={leftGridSize}>Address:</Grid>
      <Grid col={rightGridSize}>{Address}</Grid>
    </Grid>
    <Grid row>
      <Grid col={leftGridSize}>Email:</Grid>
      <Grid col={rightGridSize}>{email}</Grid>
    </Grid>
    <Grid row>
      <Grid col={leftGridSize}>State:</Grid>
      <Grid col={rightGridSize}>{State}</Grid>
    </Grid>
    <Grid row>
      <Grid col={leftGridSize}>Zip:</Grid>
      <Grid col={rightGridSize}>{ZIP}</Grid>
    </Grid>
  </GridContainer>
  </div>;
     
}