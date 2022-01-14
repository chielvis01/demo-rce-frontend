import {FEMAApplication} from '../actions';
import { Button, Grid } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css';
import '@trussworks/react-uswds/lib/index.css';
import {leftGridSize,midGridSize, rightGridSize} from '../components/App';

import CSS from 'csstype';
const button1style : CSS.Properties  = {
  width: '50px',
  display: 'inline-block',
  margin: '1px',
  height: '30px',
  fontSize: 'small' ,
  alignContent: 'left',
  alignItems: 'left',
  textAlign: 'left'
};

export interface ApplicationInfoInterface extends FEMAApplication  
{  
  delAction?: ()=>void;
  viewAction?: ()=>void;
  editAction?: ()=>void;
};

export const ApplicationInfo = ({id,
  Address,
  State,
  email,
  ZIP,
  ApplicantName,
  status, delAction, viewAction, editAction}:ApplicationInfoInterface)  =>  {
  // return <table><tbody><tr role="contentinfo"><td>{ApplicantName} </td><td>{status? "Active": "Inactive"}</td><td>
  // <Button type="button" size='small' onClick={delAction}>Del</Button>
  // <Button type="button" size='small' onClick={viewAction}>View</Button>
  // <Button type="button" size='small' onClick={editAction}>Edit</Button></td>
  // </tr></tbody></table>;

  return <Grid row><Grid col={leftGridSize} role="contentinfo">{ApplicantName}</Grid>
  <Grid col={midGridSize}>{status? "Active": "Inactive"}</Grid>
  <Grid col={rightGridSize}><Button type="button" size='small' onClick={delAction} style={button1style}>Del</Button>
  <Button type="button" size='small' onClick={viewAction} style={button1style}>View</Button>
  <Button type="button" size='small' onClick={editAction}  style={button1style}>Edit</Button></Grid>
  </Grid>
};