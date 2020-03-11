import * as React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Container, AppBar, Grid, Button, Tabs, Tab, Paper, Table, TableHead, TableRow, TableCell, TableBody  } from '@material-ui/core';
import {UserReqListItem} from './UserReqListItem';
import {UserListItem} from './UserListItem';
interface AdminStateProps {
};

interface AdminDispatchProps {
   routetologin: () => void;
}

type AdminProps = AdminStateProps & AdminDispatchProps;

const Admin: React.FunctionComponent<AdminProps> = (props:AdminProps) => {
    const [activeTab,setAT] = React.useState(0);

    const handleChange = (value:any) => {
        setAT(value);
    };
        return(
            <div>
            <AppBar color="primary" position="static">
            <Grid container>
                <Grid item sm>
                    <h1>BidIt</h1>
                </Grid>
                <Grid item style={{marginRight:50 , marginTop:'20px'}}>
                    <AccountCircleIcon style={{marginRight:4 , marginTop:5}}></AccountCircleIcon>Admin
                </Grid>
                <Grid item style={{marginRight:50 , marginTop:'20px'}}>
                    <Button color="inherit" onClick={()=>props.routetologin()}><ExitToAppIcon></ExitToAppIcon>LogOut</Button>
                </Grid>
                
            </Grid>
            </AppBar>
            <Container>
            <Tabs value={activeTab} onChange={handleChange} variant="fullWidth" centered style={{marginTop:50 }}>
                <Tab value={0} label="User Requests" onClick={()=>setAT(0)}></Tab>
                <Tab value={1} label="Users " onClick={()=>setAT(1)}></Tab>
            </Tabs>
            {
                activeTab === 0 ?
                <Container>
                    <Paper>
                    <Table title="User Requests" style={{marginTop:30}}>
                    <TableHead>
                        <TableRow>
                            <TableCell variant="body">
                                Username
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <UserReqListItem>
                        </UserReqListItem>       
                    </TableBody>
                    </Table>
                    </Paper>
                </Container>
                :
                <Container>
                    <Paper>
                    <Table title="User Requests" style={{marginTop:30}}>
                    <TableHead>
                        <TableRow>
                            <TableCell variant="body">
                                Username
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <UserListItem>
                        </UserListItem>       
                    </TableBody>
                    </Table>
                    </Paper>
                </Container>
            }
            </Container>
            </div>

        );
}

export {
    Admin,  
    AdminStateProps,
    AdminProps,
    AdminDispatchProps
} 