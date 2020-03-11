import * as React from 'react';
import { Item } from '../models';
import { Grid, CardContent, Card, Typography, Button, Container, IconButton, AppBar } from '@material-ui/core';
import { SearchBar } from './SearchBar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { ItemInfo } from './ItemInfo';

interface GuestStateProps {
    items: Item[],
};

interface GuestDispatchProps {
    getData: () => void;
}

type GuestProps = GuestStateProps & GuestDispatchProps;

const Guest: React.FunctionComponent<GuestProps> = (props: GuestProps) => {
    const [chosenItem,setChosenItem] = React.useState(null);
    function handleItemButton(x:Item){
        setChosenItem(x);
    }
    function handleBackClick(){
        setChosenItem(null);
    }
    const getCardItems = (items: Item[]) => {
        return (
            <Grid container justify="center" spacing={1}>
                {items && items.map((x: Item) =>
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
                    </Grid>)}
            </Grid>
        );
    }
    React.useEffect(() => {
        props.getData();
    }, [])

    return (
        <div>
        <AppBar color="primary" position="static">
            <Grid justify="center" container>
                <Grid item>
                    <h1>BidIt</h1>
                </Grid>
            </Grid>
        </AppBar>
        {
            chosenItem===null?
            <Container>
                <Grid container  direction="column"  justify="center"  alignItems="center" spacing={4}>
                    <Grid item style={{marginTop:20}}>
                        <SearchBar items={props.items} user={null}></SearchBar>
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
                <ItemInfo item={chosenItem}></ItemInfo>
            </Container>
        }
        </div>

    );
}

export{
    Guest,
    GuestDispatchProps,
    GuestProps,
    GuestStateProps,
}