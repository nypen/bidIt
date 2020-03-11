import * as React from 'react';
import { Item, User } from '../models';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Card, CardContent, Typography, Button, Container, AppBar, Grid, IconButton, Grow, Popper, Paper, MenuList, MenuItem} from '@material-ui/core';
import { SearchBar } from './SearchBar';
import { ViewItem } from './ViewItem';
import { FormItemContainer } from '../containers/formItemContainer';
import { ItemInfo } from './ItemInfo';
import { AdminContainer } from '../containers/adminContainer';
interface HomeStateProps {
    items: Item[],
    user: User,
};

interface HomeDispatchProps {
    getData: () => void;
    viewitembutton: () =>void;
    routetologin: () =>void;
}

type HomeProps = HomeStateProps & HomeDispatchProps;

const Home: React.FunctionComponent<HomeProps> = (props: HomeProps) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [activeTab, setAT] = React.useState(0);
    const open = Boolean(anchorEl);
    const [chosenItem,setChosenItem] = React.useState(null);
    function handleClick(event: any) {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    }
    function handleMenuClick(value: any) {
        setAnchorEl(null);
        setChosenItem(null);
        setAT(value);
    };
    function handleBackClick(){
        setChosenItem(null);
    }
    function handleItemButton(x:Item){
        setChosenItem(x);
    }
    const getCardItemsById = (items: Item[]) => {
        return (
            
            <Grid container justify="center" spacing={1}>
                {items && items.map((x: Item) =>
                    x.seller.id === props.user.id ?
                    <Grid item xs={12}>
                        <Card raised>
                            <CardContent>
                                <Grid container>
                                    <Grid item xs={6}>
                                    <Typography variant="h5" component="h2" color="textSecondary">
                                            {x.name}
                                        </Typography>
                                    </Grid>
                                    <Grid container justify="flex-end" item xs={12}>
                                        <Button variant='contained' color='inherit'
                                        onClick={()=>handleItemButton(x)}
                                        > Visit Auction</Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    :'')}
            </Grid>
        );
    }
    const getCardItems = (items: Item[]) => {
        return (
            <Grid container justify="center" spacing={1}>
                <Typography>Browse items</Typography>
                {items && items.map((x: Item) =>
                    <Grid item xs={12}>
                        <Card raised>
                            <CardContent>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <img src="img.jpg" ></img>
                                        <Typography variant="h5" component="h2" color="textSecondary">
                                            {x.name}
                                        </Typography>
                                    </Grid>
                                    <Grid container justify="flex-end" item xs={12}>
                                        <Button variant='contained' color='inherit'
                                        onClick={()=>handleItemButton(x)}
                                        > Visit Auction</Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>)}
            </Grid>
        );
    }

    React.useEffect(() => {
        props.getData();
    }, [])

    return (
        <div>
            {
                props.user.id === "49dcbadd-db4d-4263-83ad-176860bc7a18" ?
                <AdminContainer></AdminContainer>
            :
            <div>
            <AppBar color="primary" position="static">
                <Grid container>
                    <Grid item sm>
                        <IconButton color='inherit' onClick={handleClick} >
                            <MenuIcon fontSize="large" style={{ marginTop: 15 }}></MenuIcon>
                        </IconButton>
                        <Popper open={open} anchorEl={anchorEl} transition>
                            {({ TransitionProps }) => (
                                <Grow {...TransitionProps} >
                                    <Paper>
                                        <MenuList>
                                            <MenuItem value={0} onClick={()=>handleMenuClick(0)}  >Browse Auctions</MenuItem>
                                            <MenuItem value={1} onClick={()=>handleMenuClick(1)} >View my Auctions</MenuItem>
                                            <MenuItem value={2} onClick={()=>handleMenuClick(2)} >post</MenuItem>
                                        </MenuList>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper >
                    </Grid>
                    <Grid item sm>
                        <h1>BidIt</h1>
                    </Grid>
                    <Grid item style={{ marginRight: 50, marginTop: '20px' }}>
                        <AccountCircleIcon style={{ marginRight: 4, marginTop: 5 }}>
                            </AccountCircleIcon> {props.user.firstname}
                    </Grid>
                    <Grid item style={{ marginRight: 50, marginTop: '25px' }}>
                        <IconButton size='small' color="inherit" onClick={()=>props.routetologin()} ><ExitToAppIcon></ExitToAppIcon>LogOut</IconButton>
                    </Grid>
                </Grid>
            </AppBar>
            {
                activeTab ===0?
                    chosenItem===null?
                    <Container>
                    <Grid container  direction="column"  justify="center"  alignItems="center" spacing={4}>
                        <Grid item style={{marginTop:20}}>
                            <SearchBar items={props.items} user={props.user} ></SearchBar>
                        </Grid>
                        <Grid item xs={8}>
                            {getCardItems(props.items)}
                        </Grid>
                    </Grid>
                    </Container>
                    :
                    <Container>
                        <IconButton onClick={handleBackClick}size="medium">
                            <ArrowBackIcon fontSize="inherit" />Back to browse
                        </IconButton>
                        <ViewItem item={chosenItem}></ViewItem>
                    </Container>
                :activeTab === 1 ?
                    chosenItem===null?
                    <Container style={{marginTop:20}}>
                        {getCardItemsById(props.items)}
                        <Typography align="center" component="h1" variant="h5" style={{marginTop:40}}>
                            <Button type="submit" variant="contained"
                                color="primary" onClick={() => setAT(2)}>
                                    Post one now!
                            </Button>
                        </Typography>
                    </Container>
                    :
                    <Container>
                        <IconButton onClick={handleBackClick}size="medium">
                            <ArrowBackIcon fontSize="inherit" />Back to browse
                        </IconButton>
                        <ItemInfo item={chosenItem}></ItemInfo>
                    </Container>
                :
                <Container>
                    <IconButton onClick={handleBackClick}size="medium">
                        <ArrowBackIcon fontSize="inherit" />Back to browse
                    </IconButton>
                    <FormItemContainer ></FormItemContainer>
                </Container>
            }
            </div>
            }
            </div>
            );
    // return (<div>{props.items && props.items.length}</div>);
}

export {
    Home,
    HomeProps,
    HomeDispatchProps,
    HomeStateProps,
}